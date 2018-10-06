import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from "../../User";
import { Router } from '@angular/router';
import { NewUserRegistrationService } from '../../services/new-user-registration.service';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Gender } from '../../Gender';
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  items: any;
  users: Array<User>;
  signUpForm: FormGroup;
  selectedGender;
  genders = [{ 'id': 1, 'name': 'Male' }, { 'id': 2, 'name': 'Female' }];
  constructor(private fb: FormBuilder, private router: Router, public registrationService: NewUserRegistrationService) {
    this.createForm();
  }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.signUpForm = this.fb.group({
      firstName: [""],
      lastName: [""],
      date: [""],
      gender: [""],
      department: [""]
    })
  }

  signup() {
    let firstName = this.signUpForm.get('firstName').value;
    let lastName = this.signUpForm.get('lastName').value;
    let date = this.signUpForm.get('date').value;
    let gender = this.signUpForm.get('gender').value;
    let department = this.signUpForm.get('department').value;
    if (firstName != "" && lastName != "" && date != "" && gender != "" && department != "") {
      var userData: User = new User(firstName, lastName, gender, date, department);
      this.registrationService.createNewUser(userData);
      this.resetForm();
    }
    else{
      console.warn("User Data is not complete");
    }

  }

  resetForm() {
    this.signUpForm.reset();
  }
}
