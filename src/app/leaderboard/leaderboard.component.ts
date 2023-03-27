import { Component, ViewChild } from '@angular/core';

import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { pluck } from 'rxjs';
import { MyservService } from '../sevices/myserv.service';
import { UserDataType, userDataTypeBig } from '../user-data-type';
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
  tempdata: any;
  @ViewChild('grid') grid: GridComponent | undefined
  ngOnInit() {
    this.myserv.fetchAllUsers().pipe().subscribe(res => {
      this.tempdata = res
      console.log(this.tempdata);
this.refreshGrid()
    })
  }

  refreshGrid(){
    console.log('kjjj');
    
    this.grid?.refresh();
  }
  
  constructor(private myserv: MyservService) {

  }
}
