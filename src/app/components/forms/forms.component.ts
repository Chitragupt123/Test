import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule,JsonPipe],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
studentObj:any={
firstName: '',
lastName:'',
userName:'',
city:'',
state:'',
zipCode:'',
isAcceptTerms:false,
  }
  formValue:any;

  onSummit(){
    debugger
    this.formValue=this.studentObj;
  }
  resetForm(){
  this.studentObj={
  firstName: '',
lastName:'',
userName:'',
city:'',
state:'',
zipCode:'',
isAcceptTerms:false,
    }
  }

}
