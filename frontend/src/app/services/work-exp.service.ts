import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkExp } from '../model/work-exp';

@Injectable({
  providedIn: 'root'
})
export class WorkExpService {

  private url = 'http://localhost:8080/work/';

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<WorkExp[]> {
    return this.http.get<WorkExp[]>(this.url);
  }

  public getWork(id: number): Observable<WorkExp> {
    return this.http.get<WorkExp>(`${this.url}/${id}`);
  }

  addWork(work: WorkExp): Observable<WorkExp> {
    return this.http.post<WorkExp>(`${this.url}`, work);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }

}
