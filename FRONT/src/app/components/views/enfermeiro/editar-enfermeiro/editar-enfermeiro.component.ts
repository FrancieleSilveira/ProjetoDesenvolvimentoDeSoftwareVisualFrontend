import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-enfermeiro',
  templateUrl: './editar-enfermeiro.component.html',
  styleUrls: ['./editar-enfermeiro.component.css']
})
export class EditarEnfermeiroComponent implements OnInit {

       id!: number;
       matricula!: number;
       nome!: string;
       sobrenome!: string;
       cpf!: string;
       idade!: number;
       telefone!: string;
       email!: string;
       endereco!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
