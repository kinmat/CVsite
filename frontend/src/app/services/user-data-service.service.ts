import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public loggedInUser= new Subject<User>();
  private url = 'http://localhost:8080/users/';
  currentUser: User;

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
    return this.http.delete(`${this.url}/${id}`);
  }

  public getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${this.url}/username/${username}`);
  }

  getLoggedInUser() {
    console.log(this.loggedInUser)
    return this.loggedInUser.asObservable();
  }

  changeCurrentUser(user: User) {
    this.currentUser = user;
    this.loggedInUser.next(user);
  }

}
