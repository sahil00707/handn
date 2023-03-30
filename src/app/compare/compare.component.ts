import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyservService } from '../sevices/myserv.service';
import { UserDataType, userDataTypeBig } from '../user-data-type';

import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { LeaderboardComponent } from '../leaderboard/leaderboard.component';
import { fromEvent, Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent {
  userData: userDataTypeBig[] = [];
  votedData: any = {}
  allUserData: any;
  private unsubscriber : Subject<void> = new Subject<void>();
  ngOnInit() {
    history.pushState(null, '');

    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)
    ).subscribe((_) => {
      history.pushState(null, '');
     // this.showErrorModal(`You can't make changes or go back at this time.`);
    });
    this.assignData();
  }


  assignData() {

    this.userData = [];

    this.myser.fetchAllUsers().subscribe(res => {
      this.allUserData = res
      let randomInt1 = Math.floor(Math.random() * this.allUserData.length);
      this.fetchRandomUser(randomInt1)
      let randomInt2 = Math.floor(Math.random() * this.allUserData.length);
      while(randomInt2==randomInt1){
        randomInt2 = Math.floor(Math.random() * this.allUserData.length) 
      }
      this.fetchRandomUser(randomInt2)
      console.log(this.userData);

    })
  }
  vote(id: number, userData: userDataTypeBig) {
    userData.userData.votes++;
    this.myser.voteTheUser(id, userData).subscribe(res => {
      alert('Thank you for voting')
      this.assignData();
      /// window.location.reload()
    })
  }
  fetchRandomUser(id: number) {
    this.userData.push(this.allUserData[id])
  }

  showAllDetails(id:string){
document.getElementById(id)?.classList.add('show')

}
hide(id:string){
  document.getElementById(id)?.classList.remove('show')

}
  constructor(private http: HttpClient, private myser: MyservService, private router: Router) { }
}
