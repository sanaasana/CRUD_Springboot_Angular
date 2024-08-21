import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8081/user';  // Remplace par l'URL de ton API

  constructor(private http: HttpClient) { }

  /**
   * Get all users
   */
  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.apiUrl);
  }

  /**
   * add user
   */
  createUser(user: UserModel): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, user, { responseType: 'text' as 'json' });
  }
  /**
   * get user by id
   */
  getUserById(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.apiUrl}/get/${id}`);
  }
  /**
   * update user
   */
  updateUser(user: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${this.apiUrl}/update/${user.id}`, user);
  }
  /**
   * delete user
   */
  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
