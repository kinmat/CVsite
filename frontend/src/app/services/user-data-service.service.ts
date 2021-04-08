import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  loggedInUser: User;
  private url = 'http://localhost:8080/users/';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  public getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.url}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }

  changeLoggedInUser(user: User) {
    this.loggedInUser = user;
  }
}
