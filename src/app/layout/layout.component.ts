import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  router=inject(Router);
  loggedDataUser:any;


  constructor(){
    const loggedData=localStorage.getItem('loginUser')
    if(loggedData !=null){
      debugger
      this.loggedDataUser = JSON.parse(loggedData)
    }
      
  }
  logOut(){
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('login')
  }

}
