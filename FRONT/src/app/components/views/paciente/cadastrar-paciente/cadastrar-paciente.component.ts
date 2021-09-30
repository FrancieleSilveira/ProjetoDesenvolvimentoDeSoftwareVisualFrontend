import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { EnfermeiroService } from 'src/app/services/enfermeiro.service';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-cadastrar-paciente',
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.css']
})
export class CadastrarPacienteComponent implements OnInit {

  convenio!: string;  
  matricula!: string;
  nome!: string;
  sobrenome!: string;
  cpf!: string;
  datanascimento!: string;
  telefone!: string;
  email!: string;
  endereco!: string;

  constructor(private router: Router, private service: PacienteService) { }

  ngOnInit(): void {}

  cadastrar(): void {
    let paciente: Paciente = {
      
      convenio: this.convenio,
      nome: this.nome,
      sobrenome: this.sobrenome,
      cpf: this.cpf,
      datanascimento: parseInt(this.datanascimento),
      telefone: this.telefone,
      email: this.email,
      endereco: this.endereco
    };

    this.service.create(paciente).subscribe((paciente) => {
      console.log(paciente);
      this.router.navigate(["paciente/listar"]);
    });
  }
}
