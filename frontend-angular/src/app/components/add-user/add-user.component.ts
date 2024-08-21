import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  user = new UserModel();
  protected readonly NgForm = NgForm;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.userService.createUser(this.user).subscribe({
        next: (response) => {
          console.log('User added successfully !', response);
          this.router.navigate(['/users']);
        },
        error: (err) => {
          console.error('Error adding user :', err);
        }
      });
    } else {
      form.control.markAllAsTouched();
    }
  }
}
