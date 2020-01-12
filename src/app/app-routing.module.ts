import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import {AddContactComponent} from './add-contact/add-contact.component';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {HomeComponent} from './home/home.component';
import {AppViewComponent} from './app-view/app-view.component';

const routes: Routes=[
    {path:'home',component:HomeComponent},
    {path:'add',component:AddContactComponent},
    {path:'edit',component:EditContactComponent},
    {path:'view',component:AppViewComponent},
    {path:'**',redirectTo:'home'}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
