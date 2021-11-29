import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TriagemService } from 'src/app/services/triagem.service';
import { Triagem } from 'src/app/models/triagem';

@Component({
  selector: 'app-cadastrar-triagem',
  templateUrl: './cadastrar-triagem.component.html',
  styleUrls: ['./cadastrar-triagem.component.css']
})
export class CadastrarTriagemComponent implements OnInit {
  pacienteId!: string;
  sintomaId!: string;
  gravidadeId!: string;
  enfermeiroId!: string;

  constructor(private router: Router, private service: TriagemService) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    const triagem: Triagem = {
      paciente: parseInt(this.pacienteId),
      sintoma: parseInt(this.sintomaId),
      gravidade: parseInt(this.gravidadeId),
      enfermeiro: parseInt(this.enfermeiroId)
    };

    this.service.create(triagem).subscribe((triagem ) => {
      console.log(triagem);
      this.router.navigate(["triagem/listar"]);
    });
  }

}
