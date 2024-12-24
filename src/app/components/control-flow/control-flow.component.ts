import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
isdivisible:boolean=false;
isdivisiblediv2:boolean=false;
num1:string='';
num2:string='';
selectedStatus:string='';

  showdiv1(){
    this.isdivisible=true;
  }
  hidediv(){
    this.isdivisible=false;
  }
  togglediv3(){
    this.isdivisiblediv2=!this.isdivisiblediv2;
  }
}
