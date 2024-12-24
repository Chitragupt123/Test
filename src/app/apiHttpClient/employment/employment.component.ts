import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CompileIdentifierMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employment',
  imports: [FormsModule],
  templateUrl: './employment.component.html',
  styleUrl: './employment.component.css'
})

export class EmploymentComponent implements OnInit{

  queryObj:any={
    
  queryId: 0,
  name: "",
  city: "",
  projectTitle: "",
  projectDescription: ""
  }
  queryList:any[]=[];
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.getAllQuery();
  }
  onSave(){
    this.http.post('https://projectapi.gerasim.in/api/BudgetPlanner/addQuery',this.queryObj).subscribe((res:any)=>{
      if(res.result){
        this.getAllQuery();
alert('query succssfuly created')
      }
      else{
        alert('res.massage')
      }
    })
  }
  onEdit(data:any){
    this.queryObj=data;
  }
  getAllQuery(){
    debugger
    this.http.get('https://projectapi.gerasim.in/api/BudgetPlanner/getAllQuery').subscribe((res:any)=>{
this.queryList=res.data;
    })
  }
  onUpdate(){

  }
  onDelete(id:number){
    const isDelete=confirm('Are you sure you want to delete ')
    if(isDelete){
      this.http.get('https://projectapi.gerasim.in/api/BudgetPlanner/deleteQuery?id='+id).subscribe((res:any)=>{
        if(res.result){
                this.getAllQuery();
        alert('query succssfuly deleted')
              }
              else{
                alert('res.massage')
              }
            })
    }
   
  }
  onReset(){
    this.queryObj={  
  name: "",
  projectTitle: "",
  
    }
  }



 
 

}
