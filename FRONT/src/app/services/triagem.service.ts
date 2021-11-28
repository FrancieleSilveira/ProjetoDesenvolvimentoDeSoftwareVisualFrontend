import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Triagem } from "../models/triagem";

@Injectable({
  providedIn: 'root'
})
export class TriagemService {
    private baseUrl = "http://localhost:5000/api/triagem";

    constructor(private http: HttpClient) {}

    list(): Observable<Triagem[]> {
      return this.http.get<Triagem[]>(`${this.baseUrl}/list`);
    }
    create(triagem: Triagem): Observable<Triagem> {
        return this.http.post<Triagem>(`${this.baseUrl}/create`, triagem);
    }
    delete(id: number): Observable<Triagem> {
        return this.http.delete<Triagem>(`${this.baseUrl}/delete/${id}`);
    }
    update(triagem: Triagem): Observable<Triagem> {
        return this.http.put<Triagem>(`${this.baseUrl}/update`, triagem);
    }
}
