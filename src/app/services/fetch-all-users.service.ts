import { Injectable } from '@angular/core';
import { Http, Response, HttpModule } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../config/AppConfig';
import { User } from '../User';


@Injectable()
export class FetchAllUsersService {

  constructor(private http: Http) { }

  fetchAllUsers(): Observable<User[]> {
    console.log("Hi");
    return this.http.get(AppConfig.FETCH_USERS)
      .map((res: Response) => res.json());
  }
}
