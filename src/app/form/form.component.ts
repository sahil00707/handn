import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { MyservService } from '../sevices/myserv.service';
import { UserDataType } from '../user-data-type';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  open(popUp: FormComponent) {
    throw new Error('Method not implemented.');


  }
  constructor(private http: HttpClient, private myserv: MyservService) {

  }
  addData(data: UserDataType) {
    data.votes=0;
    this.myserv.addUser(data).subscribe(data => {
      alert('Data Added successfully')
    })


  }
}

