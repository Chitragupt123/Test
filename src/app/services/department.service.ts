import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  apiURL:string='https://projectapi.gerasim.in/api/Complaint/';
  PBapiURl:string='https://projectapi.gerasim.in/api/PropertyBookingController/'

  constructor(private http: HttpClient) { }

 getAllDepart(){
  
  return this.http.get(this.apiURL+'GetParentDepartment')
 }
 saveNewDepart(obj:any){
  return this.http.post(`${this.apiURL}AddNewDepartment`,obj)
 }
 updateDepart(obj:any){
  return this.http.post(this.apiURL+'UpdateDepartment',obj)
 }


 savePb(obj:any){
  return this.http.post(this.PBapiURl+'/AddCustomer',obj)
 }

 getAllPb(){
  return this.http.get(this.PBapiURl+'GetAllCustomer')
 }
 pbUpdate(obj:any){
  return this.http.put(this.PBapiURl+'UpdateCustomer',obj)
 }
 pbDelete(id:number){
  return this.http.delete(this.PBapiURl+'DeleteCustomerById?id='+id)
 }
}


