import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail//user-detail.component';

const appRoutes: Routes = [
  { path: 'users', component: UserListComponent},
  { path: 'compose/:user-id', component: UserDetailComponent, outlet: 'popup' },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
