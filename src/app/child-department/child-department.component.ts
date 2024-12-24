import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-department',
  imports: [FormsModule],
  templateUrl: './child-department.component.html',
  styleUrl: './child-department.component.css'
})
export class ChildDepartmentComponent implements OnInit {
childDeptObj:any={
  
    childDeptId: 0,
    parentDeptId: 0,
    departmentName: ""
  }
  childDeptList:any[]=[];
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
    this.getAllChildDept();
  }
  onSave(){
    debugger
    this.http.post('https://projectapi.gerasim.in/api/Complaint/AddChildDepartment',this.childDeptObj).subscribe((res:any)=>{
      if(res.result){
        alert('child Department successfuly created')
        this.getAllChildDept();
      }else{
        alert('This Department Name Already Exist')
      }
    })
  }
  onEdit(data:any){
    this.childDeptObj=data;
  }

  onUpdate(){
    this.http.post('https://projectapi.gerasim.in/api/Complaint/UpdateChildDepartment',this.childDeptObj).subscribe((res:any)=>{
      if(res.result){
        alert('child Department successfuly updated')
        this.getAllChildDept();
      }else{
        alert('This Department Name Already Exist')
      }
    })
  }
  getAllChildDept(){
    this.http.get('https://projectapi.gerasim.in/api/Complaint/GetAllChildDepartment').subscribe((res:any)=>{
      
      this.childDeptList=res.data;
    })
  }
  onDelete(id:number){
    debugger
    const isDelete=confirm('Are you sure you want to delete')
    if(isDelete){
      this.http.delete('https://projectapi.gerasim.in/api/Complaint/DeleteChildDeptById?childDeptId='+id).subscribe((res:any)=>{
        if(res.result){
              alert('child Department successfuly deleted')
              this.getAllChildDept();
            }else{
              alert('This Department Name Already Exist')
            }
      })
    }
   

  }
  onReset(){
    this.childDeptObj={
      childDeptId:0 ,
      parentDeptId: 0,
      departmentName: ""  
    }
  }


}
