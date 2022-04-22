import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './main/counter/counter.component';

const routes: Routes = [
  {
    path:'main/counter',
    component: CounterComponent
  },
  {
    path:'**',
    redirectTo:'main/counter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
