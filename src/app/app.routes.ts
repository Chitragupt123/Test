import { EmploymentComponent } from './apiHttpClient/employment/employment.component';
import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructralDirectivesComponent } from './directives/structral-directives/structral-directives.component';
import { AttributeDirectivesComponent } from './directives/attribute-directives/attribute-directives.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { FormsComponent } from './components/forms/forms.component';
import { PFormTemplateComponent } from './practices/p-form-template/p-form-template.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { GetApiComponent } from './apiHttpClient/get-api/get-api.component';
import { PutApiComponent } from './apiHttpClient/put-api/put-api.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ChildDepartmentComponent } from './child-department/child-department.component';
import { PropertyBookingComponent } from './apiHttpClient/property-booking/property-booking.component';
import { PropertyBookingNewComponent } from './apiHttpClient/property-booking-new/property-booking-new.component';
import { LifecycleEventComponent } from './lifecycle-event/lifecycle-event.component';


export const routes: Routes = [
    //default rout
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'

    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'add-emp',
                component:AddEmployeeComponent,
            },
            {
                path:'data-binding',
                component:DataBindingComponent,
            },
            {
                path:'emp-list',
                component:EmployeeListComponent,
            },
            {
                path:'structral-dir',
                component:StructralDirectivesComponent,
            },
            {
                path:'attribute-dir',
                component:AttributeDirectivesComponent,
            },
            {
                path:'controlFlow',
                component:ControlFlowComponent,
            },
            {
                path:'pipe',
                component:PipeComponent,
            },
            {
                path:'forms',
                component:FormsComponent,
            },
            {
                path:'pforms',
                component:PFormTemplateComponent,
            },
            {
                path:'Rforms',
                component:ReactiveFormComponent,
            },
            {
                path:'get-api',
                component:GetApiComponent,
            },
            {
                path:'put-api',
                component:PutApiComponent,
            },
            {
                path:'employment',
                component:EmploymentComponent,
            },
            {
                path:'childDept',
                component:ChildDepartmentComponent,
            },
            {
                path:'prty-booking',
                component:PropertyBookingComponent,
            },
            {
                path:'new-prty-booking',
                component:PropertyBookingNewComponent,
            },
            {
                path:'lifecycleE',
                component:LifecycleEventComponent,
            },
           

        ]

    },

    
    

];
