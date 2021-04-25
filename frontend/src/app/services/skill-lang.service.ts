import { Language } from './../model/language';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillLangService {

  private surl = 'http://localhost:8080/skill/';
  private lurl = 'http://localhost:8080/lang/';

  constructor(private http: HttpClient) {
  }

  public findAllSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.surl);
  }

  public getSkill(id: number): Observable<Skill> {
    return this.http.get<Skill>(`${this.surl}/${id}`);
  }

  public addSkill(s: Skill): Observable<Skill> {
    return this.http.post<Skill>(`${this.surl}`, s);
  }

  deleteSkill(id: number): Observable<any> {
    return this.http.delete(`${this.surl}/${id}`, {responseType: 'text'});
  }

  public getSkillByUser(id: number): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.surl}/user/${id}`);
  }

  //lang

  public findAllLang(): Observable<Language[]> {
    return this.http.get<Language[]>(this.lurl);
  }

  public getLang(id: number): Observable<Language> {
    return this.http.get<Language>(`${this.lurl}/${id}`);
  }

  public addLang(s: Language): Observable<Language> {
    return this.http.post<Language>(`${this.lurl}`, s);
  }

  public getLangByUser(id: number): Observable<Language[]> {
    return this.http.get<Language[]>(`${this.lurl}/user/${id}`);
  }

}
