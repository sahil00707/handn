import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDataType, userDataTypeBig} from '../user-data-type';

@Injectable({
  providedIn: 'root'
})
export class MyservService {
  baseUrl = 'http://localhost:3000/userData'
  addUser(userData: UserDataType) {
    return this.http.post('http://localhost:3000/userData', { userData })
  }

  fetchAllUsers(){
  return this.http.get(this.baseUrl);
  }

  voteTheUser(id:number,data:userDataTypeBig){
return this.http.put(this.baseUrl+'/'+id,data)
  }

  constructor(private http: HttpClient) { }
}
