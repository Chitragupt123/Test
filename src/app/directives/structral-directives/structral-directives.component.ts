import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structral-directives',
  imports: [CommonModule,FormsModule],
  templateUrl: './structral-directives.component.html',
  styleUrl: './structral-directives.component.css'
})
export class StructralDirectivesComponent {
  isDiv1Visiable:boolean=true;
  idDiv2Visiable:boolean=true;
  num1:string='';
  num2:string='';
 
  // isActive:boolean=true;
  selectedState: string='';
  cityArray: string[]=['pune','mumbai','nagpur','thane'];
studentList:string[]=['Ram','Shyam','Sita','Gita'];
studentli:any[]=[ 
  {studentId:1, name:'chitra',city:'kathmandu',isActive:false},
  {studentId:2, name:'BBBB',city:'kathmandu',isActive:false},
  {studentId:3, name:'CCCC',city:'kathmandu',isActive:true},
  {studentId:4, name:'DDDD',city:'kathmandu',isActive:true},

]




showDiv1(){
  this.isDiv1Visiable=true;
}
hideDiv1(){
  this.isDiv1Visiable=false;
}
toggleDiv2(){
  this.idDiv2Visiable=!this.idDiv2Visiable;
}

}
