import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleFormComponent } from './example-form.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/page1/page1.module').then(m => m.Page1Module) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleFormRoutingModule { }
