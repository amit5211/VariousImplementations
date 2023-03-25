import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{ path: '', component: AppComponent },
  { path: 'basic-form', loadChildren: () => import('./basic-form/basic-form.module').then(m => m.BasicFormModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
