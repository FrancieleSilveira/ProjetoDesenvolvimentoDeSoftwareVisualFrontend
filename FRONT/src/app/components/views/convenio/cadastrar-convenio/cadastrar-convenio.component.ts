import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Convenio } from 'src/app/models/convenio';
import { ConvenioService } from 'src/app/services/convenio.service';

@Component({
  selector: 'app-cadastrar-convenio',
  templateUrl: './cadastrar-convenio.component.html',
  styleUrls: ['./cadastrar-convenio.component.css']
})
export class CadastrarConvenioComponent implements OnInit {

  nome!: string;
  endereco!: string;
  telefone!: string;


  constructor(private router: Router, private service: ConvenioService) { }

  ngOnInit(): void {}

  cadastrar(): void {
    let convenio: Convenio = {
      nome: this.nome,
      endereco: this.endereco,
      telefone: this.telefone    
    };

    this.service.create(convenio).subscribe((Convenio) => {
      console.log(convenio);
      this.router.navigate(["convenio/listar"]);
    });
  }

}
