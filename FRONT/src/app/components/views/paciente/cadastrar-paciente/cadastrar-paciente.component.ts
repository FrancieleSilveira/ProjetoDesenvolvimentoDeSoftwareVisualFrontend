import { ListarConvenioComponent } from './../../convenio/listar-convenio/listar-convenio.component';
import { ConvenioService } from './../../../../services/convenio.service';
import { Convenio } from './../../../../models/convenio';
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

  convenioId!: string;
  convenio!: string;
  matricula!: string;
  nome!: string;
  sobrenome!: string;
  cpf!: string;
  idade!: string;
  telefone!: string;
  email!: string;
  endereco!: string;
  convenios: Convenio[] = [];

  constructor(private router: Router, private service: PacienteService, private convenioService: ConvenioService) { }

  ngOnInit(): void {
    this.convenioService.list().subscribe((convenios) => {
      this.convenios = convenios;
    }) 
  }

  cadastrar(): void {
    let paciente: Paciente = {

      convenioId: parseInt(this.convenioId),
      convenio: this.convenio,
      nome: this.nome,
      sobrenome: this.sobrenome,
      cpf: this.cpf,
      idade: parseInt(this.idade),
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
