import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
courseName: string="Angular-18";
stateName:string="";
inputType="radio";
rollNo:number=123;
isIndian: boolean=false;
currentDate:Date=new Date();

firstName=signal("chitragupt");


constructor(){

}
changeCourseName(){
  this.courseName="react js";
  this.firstName.set(" chitra")
}
showAlert(message:string){
alert(message)
}
}
