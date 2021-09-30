import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enfermeiro } from 'src/app/models/enfermeiro';
import { EnfermeiroService } from 'src/app/services/enfermeiro.service';

@Component({
  selector: 'app-editar-enfermeiro',
  templateUrl: './editar-enfermeiro.component.html',
  styleUrls: ['./editar-enfermeiro.component.css']
})
export class EditarEnfermeiroComponent implements OnInit {

       id!: number;
       matricula!: string;
       nome!: string;
       sobrenome!: string;
       cpf!: string;
       idade!: string;
       telefone!: string;
       email!: string;
       endereco!: string;

  constructor(private router: Router, private service: EnfermeiroService) { }

  ngOnInit(): void {}

  editar(): void{
    let enfermeiro: Enfermeiro = {
      matricula: parseInt(this.matricula),
      nome: this.nome,
      sobrenome: this.sobrenome,
      cpf: this.cpf,
      idade: parseInt(this.idade),
      telefone: this.telefone,
      email: this.email,
      endereco: this.endereco
    };

    this.service.Update(enfermeiro).subscribe((enfermeiro) => {
      console.log(enfermeiro);
      this.router.navigate(["enfermeiro/listar"]);
    });
  }

}
