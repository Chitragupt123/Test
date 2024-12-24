import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-p-form-template',
  imports: [FormsModule,JsonPipe],
  templateUrl: './p-form-template.component.html',
  styleUrl: './p-form-template.component.css'
})
export class PFormTemplateComponent {


userInfo:any={
  FirstName:'',
  lastName:'',
  userName:'',
  city:'',
  provience:'',
  zip:'',
  isActive:false

};
userValue:any;

onsummit(){
  
this.userValue=this.userInfo
debugger
}
resetform(){
  this.userInfo={
    FirstNmae:'',
  lastName:'',
  userName:'',
  city:'',
  provience:'',
  zip:'',
  isActive:false
  }
}

}
