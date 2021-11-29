import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Atendimento } from "src/app/models/atendimento";
import { AtendimentoService } from "src/app/services/atendimento.service";
import { Enfermeiro } from 'src/app/models/enfermeiro';
import { EnfermeiroService } from 'src/app/services/enfermeiro.service';

@Component({
    selector: "app-cadastrar-atendimento",
    templateUrl: "./cadastrar-atendimento.component.html",
    styleUrls: ["./cadastrar-atendimento.component.css"],
})
export class CadastrarAtendimentoComponent implements OnInit {
    paciente!: string;
    enfermeiro!: string;
    enfermeiros: Enfermeiro[] = [];

    constructor(private router: Router, private service: AtendimentoService, private enfermeiroService: EnfermeiroService) {}

    ngOnInit(): void {
        this.enfermeiroService.list().subscribe((enfermeiros) => {
          this.enfermeiros = enfermeiros;
        }) 
      }

    cadastrar(): void {
        let atendimento: Atendimento = {
            paciente: this.paciente,
            enfermeiro: this.enfermeiro
            
        };
        this.service.create(atendimento).subscribe((atendimento) => {
            console.log(atendimento);
            this.router.navigate(["atendimento/listar"]);
        });
    }
}
