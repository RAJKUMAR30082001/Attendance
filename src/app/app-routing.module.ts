import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterviewComponent } from './afterview/afterview.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  
  {path:'view',component:ViewComponent},
  {path:'',component:AfterviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
