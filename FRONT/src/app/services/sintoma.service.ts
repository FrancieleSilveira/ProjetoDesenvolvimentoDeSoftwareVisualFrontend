import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Sintoma } from "../models/sintoma";

@Injectable({
    providedIn: "root",
})
export class SintomaService {
    private baseUrl = "http://localhost:5000/api/sintoma";

    constructor(private http: HttpClient) {}
    
    list(): Observable<Sintoma[]> {
        return this.http.get<Sintoma[]>(`${this.baseUrl}/list`);
    }
    create(sintoma: Sintoma): Observable<Sintoma> {
        return this.http.post<Sintoma>(`${this.baseUrl}/create`, sintoma);
    }
    delete(sintoma: Sintoma): Observable<Sintoma> {
        return this.http.post<Sintoma>(`${this.baseUrl}delete/{nome}`, sintoma.nome);
    }
}
