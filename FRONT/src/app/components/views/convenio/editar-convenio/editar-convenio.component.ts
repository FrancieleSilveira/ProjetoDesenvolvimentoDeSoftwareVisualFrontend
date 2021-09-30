import { Convenio } from './../../../../models/convenio';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConvenioService } from 'src/app/services/convenio.service';

@Component({
  selector: 'app-editar-convenio',
  templateUrl: './editar-convenio.component.html',
  styleUrls: ['./editar-convenio.component.css']
})
export class EditarConvenioComponent implements OnInit {

  id!: number;
  nome!: string;
  endereco!: string;
  telefone!: string;

  constructor(private router: Router, private service: ConvenioService) { }

  ngOnInit(): void { }

  editar(): void {
    let convenio: Convenio = {
      id: this.id,
      nome: this.nome,
      endereco: this.endereco,
      telefone: this.telefone
    };

    this.service.update(convenio).subscribe((convenio) => {
      console.log(convenio);
      this.router.navigate(["convenio/listar"]);
    });
  }

}
