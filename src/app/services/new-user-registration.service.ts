import { Injectable } from '@angular/core';
import { User } from '../User';
import { Http, Response, HttpModule } from "@angular/http";
import { AppConfig } from '../config/AppConfig';

@Injectable()
export class NewUserRegistrationService {

  userData:any={};
  constructor(private http: Http) { }

  createNewUser(user: User) {
    console.log(user);
    return this.http.post(AppConfig.CREATE_USER, user)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }
  fetchUserByName(name:string){
    this.http.get(AppConfig.GET_USER_BY_NAME,name).toPromise().then(response=>response.json());
  }

  // handling error
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
