import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenComponent } from './assignment/data-binding-final/even/even.component';

const routes: Routes = [
 { 
   path : 'even',
  component : EvenComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
