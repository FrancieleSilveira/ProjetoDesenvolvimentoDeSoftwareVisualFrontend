import { Component, OnInit } from "@angular/core";
import { Atendimento } from "src/app/models/atendimento";
import { AtendimentoService } from "src/app/services/atendimento.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-listar-atendimento",
    templateUrl: "./listar-atendimento.component.html",
    styleUrls: ["./listar-atendimento.component.css"],
})
export class ListarAtendimentoComponent implements OnInit {
 
    constructor() { }

    ngOnInit(): void {
    }
    
    // atendimentos: Atendimento[] = [];

    // constructor(private router: Router, private service: AtendimentoService) {}

    // ngOnInit(): void {
    //     this.service.list().subscribe((atendimentos) => {
    //         this.atendimentos = atendimentos;
    //         console.log(atendimentos);
    //     });
    // }
}
