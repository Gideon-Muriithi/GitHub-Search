import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  // { path: '', redirectTo: '/profile', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

