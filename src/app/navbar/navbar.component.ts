import { Component } from '@angular/core';
import { MyservService } from '../sevices/myserv.service';
import { UserDataType } from '../user-data-type';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  openForm(){
    this.popUp.open(FormComponent)

  }
  constructor(private myserv: MyservService,public popUp: MatDialog) {

  }
}
