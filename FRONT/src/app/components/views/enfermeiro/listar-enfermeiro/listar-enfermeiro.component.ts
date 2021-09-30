import { EnfermeiroService } from './../../../../services/enfermeiro.service';
import { Enfermeiro } from './../../../../models/enfermeiro';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-enfermeiro',
  templateUrl: './listar-enfermeiro.component.html',
  styleUrls: ['./listar-enfermeiro.component.css']
})
export class ListarEnfermeiroComponent implements OnInit {

  enfermeiros: Enfermeiro[] = [];

  constructor(private router: Router, private service: EnfermeiroService) { }

  ngOnInit(): void {
    this.service.list().subscribe((enfermeiros) => {
      this.enfermeiros = enfermeiros;
      console.log(enfermeiros);
    });
  }

  deletar(id: any) {
    this.service.delete(id).subscribe((id) => {});
    this.router.navigate([""]);
  }

}
