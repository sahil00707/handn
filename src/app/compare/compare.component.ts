import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyservService } from '../sevices/myserv.service';
import { UserDataType, userDataTypeBig } from '../user-data-type';

import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';
@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent {
  userData: userDataTypeBig[] = [];
  votedData: any = {}
  allUserData: any;
  ngOnInit() {
    
    this.myser.fetchAllUsers().subscribe(res => {
      this.allUserData = res
      let randomInt1 = Math.floor(Math.random() * this.allUserData.length)
      this.fetchRandomUser(randomInt1)
      let randomInt2 = Math.floor(Math.random() * this.allUserData.length)
      this.fetchRandomUser(randomInt2)
      console.log(this.userData);
      
    })
  }
  
  vote(id: number, userData: userDataTypeBig) {
    userData.userData.votes++;
    this.myser.voteTheUser(id, userData).subscribe(res => {
      alert('Thank you for voting')
    //  console.log(res);
//this.leaderboard.refreshGrid();
     // window.location.reload()
      //this.router.navigate(['/app-compare'])
    })
  }
  fetchRandomUser(id: number) {
    this.userData.push(this.allUserData[id])
  }

  constructor(private http: HttpClient, private myser: MyservService, private router: Router,private leaderboard:LeaderboardComponent) { }
}
