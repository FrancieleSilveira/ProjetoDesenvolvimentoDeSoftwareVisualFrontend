import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from '../models/convenio';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService {

  private baseUrl = "http://localhost:5000/api/convenio";

  constructor(private http: HttpClient) { }

  list(): Observable<Convenio[]> {
    return this.http.get<Convenio[]>(`${this.baseUrl}/list`);
  }

  create(convenio: Convenio): Observable<Convenio> {
    return this.http.post<Convenio>(`${this.baseUrl}/create`, convenio);
  }

  update(convenio: Convenio): Observable<Convenio> {
    return this.http.put<Convenio>(`${this.baseUrl}/update`, convenio);
  }
  
  delete(nome: string): Observable<Convenio> {
    return this.http.delete<Convenio>(`${this.baseUrl}/delete/${nome}`);
  }
}
