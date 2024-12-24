import { Component ,OnInit,DoCheck, AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  imports: [],
  templateUrl: './lifecycle-event.component.html',
  styleUrl: './lifecycle-event.component.css'
})
export class LifecycleEventComponent implements OnInit, DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked,OnDestroy{
  firstName:string;
  
  constructor(){
    console.log('constructor')
    this.firstName='';
  }
  ngOnInit(): void {
    console.log('ngonint')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck') 
  }
  ngAfterViewInit(): void {
    console.log('ngAfterviewInt') 
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewchecked')  
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit') 
  }
  ngAfterContentChecked(): void {
    console.log(' ngAfterContentChecked') 
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy') 
  }

}
