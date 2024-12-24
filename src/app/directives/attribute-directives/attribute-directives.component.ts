import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css'
})
export class AttributeDirectivesComponent {
  div1BgColor:string=' bg-success';
isdiv2Active:boolean=false;
num1:string='';
num2:string='';
isActive:boolean=false;
customStyle: any={
'color':'white',
'background-color':'red',
'width':'200px',
'height':'200px',
'border-radius':'50%'
}

  addRedClass(){
    this.div1BgColor='bg-danger';
  }

  addBlueClass(){
    this.div1BgColor='bg-primary';
  }
  toggleDiv2(){
    this.isdiv2Active=!this.isdiv2Active;
  }

  studentlist:any[]=[ 
    {studentId:3,totalMarks:23, gender:'female', name:'CCCC',city:'kathmandu',isActive:true},
    {studentId:2,totalMarks:53, gender:'male', name:'BBBB',city:'kathmandu',isActive:false},
    {studentId:1,totalMarks:99, gender:'female', name:'chitra',city:'kathmandu',isActive:false},
    {studentId:4,totalMarks:73, gender:'male', name:'DDDD',city:'kathmandu',isActive:true},
  
  ]
}
