import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit {

  convenioId!: number;
  nome!: string;
  sobrenome!: string;
  cpf!: string;
  idade!: number;
  telefone!: string;
  email!: string;
  endereco!: string;

  constructor(private router: Router, private service: PacienteService) { }

  ngOnInit(): void {}

  editar(): void{
    let paciente: Paciente = {
      
      convenioid: this.convenioId,
      nome!: this.nome,
      sobrenome!: this.sobrenome,
      cpf!: this.cpf,
      idade: this.idade,
      telefone: this.telefone,
      email: this.email,
      endereco: this.endereco
    };

    this.service.update(paciente).subscribe((paciente) => {
      console.log(paciente);
      this.router.navigate(["paciente/listar"]);
    });
  }

}
