import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sintoma } from 'src/app/models/sintoma';
import { SintomaService } from 'src/app/services/sintoma.service';

@Component({
  selector: 'app-editar-sintoma',
  templateUrl: './editar-sintoma.component.html',
  styleUrls: ['./editar-sintoma.component.css']
})
export class EditarSintomaComponent implements OnInit {

       id!: number;
       nome!: string;
       grauIntensidade!: string;
       

  constructor(private router: Router, private service: SintomaService) { }

  ngOnInit(): void {}

  editar(): void{
    let sintoma: Sintoma = {
      id: this.id,
      nome: this.nome,
      grauIntensidade: this.grauIntensidade
    };

    this.service.update(sintoma).subscribe((sintoma) => {
      console.log(sintoma);
      this.router.navigate(["sintoma/listar"]);
    });
  }

}
