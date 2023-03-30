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
  public sortOption:object= { columns: [{ field: 'userData.votes', direction: 'descending' }] };
  @ViewChild('grid') grid: GridComponent | undefined
  ngOnInit() {
    this.myserv.fetchAllUsers().pipe().subscribe(res => {
      this.tempdata = res
      console.log(this.tempdata);
      this.refreshGrid()
    })
  }

  refreshGrid() {

    this.grid?.refresh();
    console.log('ssd');

  }

  constructor(private myserv: MyservService) {

  }
}
