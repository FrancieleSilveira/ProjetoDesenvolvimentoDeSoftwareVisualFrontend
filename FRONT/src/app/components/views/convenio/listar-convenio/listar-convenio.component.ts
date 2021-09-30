import { Convenio } from './../../../../models/convenio';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConvenioService } from 'src/app/services/convenio.service';

@Component({
  selector: 'app-listar-convenio',
  templateUrl: './listar-convenio.component.html',
  styleUrls: ['./listar-convenio.component.css']
})
export class ListarConvenioComponent implements OnInit {

  convenios: Convenio[] = [];

  constructor(private router: Router, private service: ConvenioService) { }

  ngOnInit(): void {
    this.service.list().subscribe((convenios) => {
      this.convenios = convenios;
      console.log(convenios);
    });
  }

  deletar(nome: any) {
    this.service.delete(nome).subscribe((nome) => {});
    this.router.navigate([""]);
  }

}
