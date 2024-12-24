import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  studentForm:FormGroup=new FormGroup({
firstName:new FormControl("",[Validators.required,Validators.minLength(4)]),
lastName:new FormControl(""),
username:new FormControl("some@123",[Validators.email]),
city:new FormControl(""),
provience:new FormControl(""),
zipCode:new FormControl(""),

isAcceptTerms:new FormControl(""),

  });
  formvalue:any;
  onsave(){
    this.formvalue=this.studentForm.value;
    debugger
  }
  onclear(){
    this.studentForm.reset();
      
    
  }

}
