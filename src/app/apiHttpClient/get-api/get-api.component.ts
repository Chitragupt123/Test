
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from '../../ReusableComponent/alert/alert.component';

@Component({
  selector: 'app-get-api',
  imports: [AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userlist:any[]=[];
  customerlist:any[]=[];
  constructor(private http: HttpClient){

  }

  getAllUser(){
    debugger
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      debugger
this.userlist=res;
    })
  }
  getAllCustomer(){
    debugger
    this.http.get('https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers').subscribe((result:any)=>{
      debugger
      this.customerlist=result.data;

    }, error=>{
debugger
    })
  }
}
