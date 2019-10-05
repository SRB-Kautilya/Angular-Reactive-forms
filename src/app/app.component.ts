import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];

  //The first step is importing form group from '@angular/forms
  signupForm:FormGroup


ngOnInit(){
  //As it is type of form we have to create new formGroup which takes js object
  this.signupForm = new FormGroup({
    //in this js object we have to add controlls(ehich are key value pairs of formGroup) 
    //FormControl another class takes 3 args imported from @angular/forms. The 3 args are initial state, single validator or array of validators, async validators
    'username': new FormControl(null),
    'email':new FormControl(null),
    'gender':new FormControl('male')
  })
  }
// onsubmit takes formgroup class methods
  onSubmit(){
    console.log(this.signupForm)
  }
}

