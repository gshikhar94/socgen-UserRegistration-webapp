import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { RegisteredUsersComponent } from './components/registered-users/registered-users.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NewUserRegistrationService } from './services/new-user-registration.service';
import { FetchAllUsersService } from './services/fetch-all-users.service';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    RegisteredUsersComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule, HttpModule
  ],
  providers: [NewUserRegistrationService, FetchAllUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
