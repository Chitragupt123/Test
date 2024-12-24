import { HttpClient } from '@angular/common/http';
import { Component, DebugElement, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj:any={
    EmailId:'',
    // Name:'',
    Password: ""
  };
 
  router =inject(Router)
  http= inject(HttpClient)

  onlogin(){


  this.http.post('https://projectapi.gerasim.in/api/UserApp/login',this.userObj).subscribe((res:any)=>{
if(res.result){
  alert('login successful');
        localStorage.setItem("loginUser",JSON.stringify(res.data))
  this.router.navigateByUrl('put-api')
}else{
  alert('wrong password')
}
   })
 




//     if(this.userObj.Name=='chitra' && this.userObj.Password=='123'){
//       debugger
//       alert('login successful');
//       localStorage.setItem("loginUser",this.userObj.Name)
// this.router.navigateByUrl('put-api')
//     }else{
//       alert('wrong passpord')
//     }
  }


}
