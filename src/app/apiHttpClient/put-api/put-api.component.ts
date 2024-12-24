
import { HttpClient } from '@angular/common/http';
import { Component, inject ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-put-api',
  imports: [FormsModule],
  templateUrl: './put-api.component.html',
  styleUrl: './put-api.component.css'
})
export class PutApiComponent implements OnInit{

  departObj:any={
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }
  departList:any[]=[];
  constructor(private http:HttpClient,private departServ:DepartmentService, 
  ){
   


  }
  ngOnInit(): void {
    
    this.getDepartment();
  }

  onEdit(data:any){
    this.departObj=data;

  }
//   onSave(){
//     debugger
//     this.http.post('https://projectapi.gerasim.in/api/Complaint/AddNewDepartment',this.departObj).subscribe((res:any)=>{
//       debugger;
// if(res.result){
// alert('department created successfuly');
// this.getDepartment();
// }else{
//   alert('res.message');
// }
//     })
//   }

onSave(){
  this.departServ.saveNewDepart(this.departObj).subscribe((res:any)=>{
    if(res.result){
      alert('department created successfuly');
      this.getDepartment();
      
      }else{
        alert('res.message');
      }
  })
}


//   onupdate(){
//     this.http.post('https://projectapi.gerasim.in/api/Complaint/UpdateDepartment',this.departObj).subscribe((res:any)=>{
//       debugger;
// if(res.result){
// alert('department update successfuly');
// this.getDepartment();
// }else{
//   alert('res.message');
// }
//     })
//   }

onupdate(){
  this.departServ.updateDepart(this.departObj).subscribe((res:any)=>{
if(res.result){
  alert('department successfuly updated')
  this.getDepartment();
}else{
  alert('res.message')
}
  })
}

  onDelete(id:number){
   const  isDelete=confirm('Are you sure want to delete')
   if(isDelete){
    this.http.delete('https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId='+id).subscribe((res:any)=>{
      debugger
      if(res.result){
alert('derpartment deleted successfuly')
this.getDepartment();
      }else{
        alert('res.message');
      }
    })
   }
    debugger
    
  }

//   getDepartment (){
//     debugger
//     this.http.get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment').subscribe((res:any)=>{
//       debugger
// this.departList=res.data;
//     })
//   }
getDepartment(){
  
  this.departServ.getAllDepart().subscribe((res:any)=>{
    
    this.departList=res.data;
  })
}

onReset(){
  this.departObj={
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": "" 
  }
}
}
