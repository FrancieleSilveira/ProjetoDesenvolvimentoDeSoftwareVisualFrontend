import { Component, OnInit } from "@angular/core";
import { Sintoma } from "src/app/models/sintoma";
import { SintomaService } from "src/app/services/sintoma.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-deletar-sintoma",
    templateUrl: "./deletar-sintoma.component.html",
    styleUrls: ["./deletar-sintoma.component.css"],
})
export class DeletarSintomaComponent implements OnInit {
    sintomas: Sintoma[] = [];
    nome!: string;
    grauIntensidade!: string;

    constructor(private service: SintomaService) {}

    ngOnInit(): void {}

    deletar(): void {
        let sintoma: Sintoma = {
            nome: this.nome,
            grauIntensidade: this.grauIntensidade
            
        };
        // this.service.create(sintoma).subscribe((sintoma) => {
        //     console.log(sintoma);
        //     this.router.navigate(["sintoma/deletar"]);
        // });
    }
}
