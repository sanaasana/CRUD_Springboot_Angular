import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users: UserModel[] = [];
  displayedColumns: string[] = ['name', 'age', 'address', 'actions'];

  constructor(
      private userService: UserService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error retrieving users:', err);
      }
    });
  }
  /**
   * edit user
   */
  editUser(user: UserModel): void {
    // Vérifiez que l'ID est défini et valide
    if (user && user.id) {
      this.router.navigate(['users/edit/', user.id]);
    } else {
      console.error('User ID not set or invalid');
    }
  }
  /**
   * delete user
   */
  deleteUser(user: UserModel): void {
    console.log('Delete user:', user);
    this.userService.deleteUser(user.id).subscribe({
      next: () => {
    // Refresh user list after deletion
    this.users = this.users.filter(u => u.id !== user.id);
      },
      error: (err) => {
        console.error('Error deleting user:', err);
      }
    });
  }

}
