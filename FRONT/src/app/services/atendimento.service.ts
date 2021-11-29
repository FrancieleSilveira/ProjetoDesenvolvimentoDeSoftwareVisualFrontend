import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Atendimento } from "../models/atendimento";

@Injectable({
    providedIn: "root",
})
export class AtendimentoService {
    private baseUrl = "http://localhost:5000/api/atendimento";

    constructor(private http: HttpClient) {}
    
    list(): Observable<Atendimento[]> {
        return this.http.get<Atendimento[]>(`${this.baseUrl}/list`);
    }
    create(atendimento: Atendimento): Observable<Atendimento> {
        return this.http.post<Atendimento>(`${this.baseUrl}/create`, atendimento);
    }
    delete(id: number): Observable<Atendimento> {
        return this.http.delete<Atendimento>(`${this.baseUrl}/delete/${id}`);
    }
    update(atendimento: Atendimento): Observable<Atendimento> {
        return this.http.put<Atendimento>(`${this.baseUrl}/update`, atendimento);
    }
}
