import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PropertyBookingComponent } from '../property-booking/property-booking.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-property-booking-new',
  imports: [FormsModule,JsonPipe],
  templateUrl: './property-booking-new.component.html',
  styleUrl: './property-booking-new.component.css'
})
export class PropertyBookingNewComponent {
  pbObj:any={
  
    custId: 0,
    name: "",
    mobile: "",
    emailid: "",
    address: "" 
}
custlist:any;
save(){
  this.custlist=this.pbObj;
}


}
