import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css']
})
export class ListarPacienteComponent implements OnInit {
  pacientes: Paciente[] = [];
  constructor(private router: Router, private service: PacienteService) { }

  ngOnInit(): void {
    this.service.list().subscribe((paciente =>{
      console.log(paciente);
      this.pacientes = paciente;
    }));
  }

  deletar(id: any) {
    this.service.delete(id).subscribe((id) => {});
    this.router.navigate([""]);               
  }

}
