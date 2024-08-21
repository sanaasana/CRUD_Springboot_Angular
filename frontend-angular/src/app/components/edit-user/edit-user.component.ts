import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user: UserModel = new UserModel();
  userId!: number;

  constructor(
      private userService: UserService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userId = +id;
      this.loadUser();
    } else {
      console.error('ID utilisateur non trouvé.');
    }
  }

  loadUser(): void {
    this.userService.getUserById(this.userId).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement de l\'utilisateur :', err);
      }
    });
  }

  onSubmit(): void {
    this.userService.updateUser(this.user).subscribe({
      next: (response) => {
        console.log('Utilisateur mis à jour avec succès !', response);
        this.router.navigate(['/users']);
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour de l\'utilisateur :', err);
      }
    });
  }
}
