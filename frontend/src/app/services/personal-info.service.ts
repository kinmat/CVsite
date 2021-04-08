import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalInfo } from '../model/personal-info';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  loggedInUser: User;
  personalInfo: PersonalInfo;
  private url = 'http://localhost:8080/personal/';

  constructor(private http: HttpClient) {
  }

  addPersonalInfo(personalInfo: Object): Observable<Object> {
    return this.http.post(`${this.url}`, personalInfo);
  }

  getPersonalInfo(userId: number): Observable<Object> {
    return this.http.get(`${this.url}/${userId}`);
  }

  changePersonalInfo(pi: PersonalInfo) {
    this.personalInfo = pi;
  }
}
