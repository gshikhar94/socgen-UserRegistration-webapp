import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { UserRegistrationComponent } from '../components/user-registration/user-registration.component';
import { RegisteredUsersComponent } from '../components/registered-users/registered-users.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-registration',
    pathMatch: 'full'
  },
  {
    path: 'user-registration',
    component: UserRegistrationComponent,
    pathMatch: 'full'
  },
  {
    path: 'registered-users',
    component: RegisteredUsersComponent,
    pathMatch: 'full'
  }
]
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
