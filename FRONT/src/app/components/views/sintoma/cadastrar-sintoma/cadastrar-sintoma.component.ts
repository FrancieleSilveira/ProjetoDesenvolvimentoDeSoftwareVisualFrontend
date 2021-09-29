import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Sintoma } from "src/app/models/sintoma";
import { SintomaService } from "src/app/services/sintoma.service";

@Component({
    selector: "app-cadastrar-sintoma",
    templateUrl: "./cadastrar-sintoma.component.html",
    styleUrls: ["./cadastrar-sintoma.component.css"],
})
export class CadastrarSintomaComponent implements OnInit {
    nome!: string;
    grauIntensidade!: string;

    constructor(private router: Router, private service: SintomaService) {}

    ngOnInit(): void {}

    cadastrar(): void {
        let sintoma: Sintoma = {
            nome: this.nome,
            grauIntensidade: this.grauIntensidade
            
        };
        this.service.create(sintoma).subscribe((sintoma) => {
            console.log(sintoma);
            this.router.navigate(["sintoma/listar"]);
        });
    }
}
