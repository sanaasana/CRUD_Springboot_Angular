import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListUsersComponent} from './components/list-users/list-users.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';

const routes: Routes = [
  { path: 'users', component: ListUsersComponent },
  { path: 'users/add', component: AddUserComponent },
  { path: 'users/edit/:id', component: EditUserComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
