import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enfermeiro } from '../models/enfermeiro';

@Injectable({
  providedIn: 'root'
})

export class EnfermeiroService {

  private baseUrl = "http://localhost:5000/api/enfermeiro";

  constructor(private http: HttpClient) { }

  list(): Observable<Enfermeiro[]> {
    return this.http.get<Enfermeiro[]>(`${this.baseUrl}/list`);
  }

  create(enfermeiro: Enfermeiro): Observable<Enfermeiro> {
    return this.http.post<Enfermeiro>(`${this.baseUrl}/create`, enfermeiro);
  }

  update(enfermeiro: Enfermeiro): Observable<Enfermeiro> {
    return this.http.put<Enfermeiro>(`${this.baseUrl}/update`, enfermeiro);
  }
  
  delete(id: number): Observable<Enfermeiro> {
    return this.http.delete<Enfermeiro>(`${this.baseUrl}/delete/${id}`);
  }
}
