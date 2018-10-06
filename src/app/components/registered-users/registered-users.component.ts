import { Component, OnInit } from '@angular/core';
import { NewUserRegistrationService } from '../../services/new-user-registration.service';
import { FetchAllUsersService } from '../../services/fetch-all-users.service';
import { User } from '../../User';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  registeredUsersData:Observable<User[]>;
  constructor(private registeredUsers: FetchAllUsersService) {
    this.fetchAllUsers();
   }

  ngOnInit() {
  }

  fetchAllUsers() {
    this.registeredUsersData = this.registeredUsers.fetchAllUsers();
  }
}
