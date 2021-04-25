import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private url = 'http://localhost:8080/edu/';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<Education[]> {
    return this.http.get<Education[]>(this.url);
  }

  public getEdu(id: number): Observable<Education> {
    return this.http.get<Education>(`${this.url}/${id}`);
  }

  addEdu(edu: Education): Observable<Education> {
    return this.http.post<Education>(`${this.url}`, edu);
  }

  deleteEdu(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }

  public getEduByUser(id: number): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.url}/user/${id}`);
  }

}
