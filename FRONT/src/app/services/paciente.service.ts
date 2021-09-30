import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Paciente } from "../models/paciente"
@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private baseUrl = "http://localhost:5000/api/paciente";

  constructor(private http: HttpClient) { }

  list(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.baseUrl}/list`);
  }
  
  create(paciente: Paciente): Observable<Paciente> {
      return this.http.post<Paciente>(`${this.baseUrl}/create`, paciente);
  }

  update(paciente: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${this.baseUrl}/update`, paciente);
  }

  delete(id: number): Observable<Paciente> {
    return this.http.delete<Paciente>(`${this.baseUrl}/delete/${id}`);
  }
}
