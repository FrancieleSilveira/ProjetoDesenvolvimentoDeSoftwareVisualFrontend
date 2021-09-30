import { Enfermeiro } from './../../../../models/enfermeiro';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnfermeiroService } from 'src/app/services/enfermeiro.service';

@Component({
  selector: 'app-cadastrar-enfermeiro',
  templateUrl: './cadastrar-enfermeiro.component.html',
  styleUrls: ['./cadastrar-enfermeiro.component.css']
})
export class CadastrarEnfermeiroComponent implements OnInit {

  matricula!: string;
  nome!: string;
  sobrenome!: string;
  cpf!: string;
  dataNascimento!: string;
  telefone!: string;
  email!: string;
  endereco!: string;

  constructor(private router: Router, private service: EnfermeiroService) { }

  ngOnInit(): void {}

  cadastrar(): void {
    let enfermeiro: Enfermeiro = {
      matricula: parseInt(this.matricula),
      nome: this.nome,
      sobrenome: this.sobrenome,
      cpf: this.cpf,
      datanascimento: parseInt(this.dataNascimento),
      telefone: this.telefone,
      email: this.email,
      endereco: this.endereco
    };

    this.service.create(enfermeiro).subscribe((enfermeiro) => {
      console.log(enfermeiro);
      this.router.navigate(["enfermeiro/listar"]);
    });
  }

  }
