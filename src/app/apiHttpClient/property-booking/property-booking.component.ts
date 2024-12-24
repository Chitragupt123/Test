import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DepartmentService } from '../../services/department.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-property-booking',
  imports: [RouterLink,FormsModule],
  templateUrl: './property-booking.component.html',
  styleUrl: './property-booking.component.css'
})
export class PropertyBookingComponent implements OnInit {
pbObj:any={
  
    custId: 0,
    name: "",
    mobile: "",
    emailid: "",
    address: "" 
}
PbList:any[]=[];
constructor(private http:HttpClient, private departServ:DepartmentService){

}
ngOnInit(): void {
  this.getAllProtBooking() ;
}
onSave(){
  this.departServ.savePb(this.pbObj).subscribe((res:any)=>{
    if(res.result){
      alert('property booking successfuly created')
      this.getAllProtBooking() ;
    }
    else{
      alert('customer already exit')
    }
  })
}
getAllProtBooking(){
  this.departServ.getAllPb().subscribe((res:any)=>{
this.PbList=res.data;
  })
}onReset(){
 this.pbObj={
    custId: 0,
    name: "",
    mobile: "",
    emailid: "",
    address: "" 
}
}
onUpdate(){
this.departServ.pbUpdate(this.pbObj).subscribe((res:any)=>{
  if(res.result){
    alert('property booking updated successfuly')
    this.getAllProtBooking();
  } else{
    alert('customer already exit')
  }
})
}
onEdit(data:any){
  this.pbObj=data;
}
onDelete(id:number){
  const isDelete=confirm('are you sure want to delete')
  if(isDelete){
    this.departServ.pbDelete(id).subscribe((res:any)=>{
      if(res.result){
        alert('property booking deleted successfuly')
        this.getAllProtBooking();
      } 
    })
  }
  
}

}
