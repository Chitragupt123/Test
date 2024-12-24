import { DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
firstName:string='this is demo session';
currentDate:Date=new Date();
student:any={
  name:'chitragupt',
  city:'kathmandu',
  empId:1,
}
}
