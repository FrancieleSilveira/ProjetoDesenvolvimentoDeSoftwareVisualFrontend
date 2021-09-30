import { EnfermeiroService } from './../../../../services/enfermeiro.service';
import { Enfermeiro } from './../../../../models/enfermeiro';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-enfermeiro',
  templateUrl: './listar-enfermeiro.component.html',
  styleUrls: ['./listar-enfermeiro.component.css']
})
export class ListarEnfermeiroComponent implements OnInit {

  enfermeiros: Enfermeiro[] = [];
  enfermeiro!: Enfermeiro;

  constructor(private service: EnfermeiroService) { }

  ngOnInit(): void {
    this.service.list().subscribe((enfermeiros) => {
      this.enfermeiros = enfermeiros;
      console.log(enfermeiros);
    });
  }

  delete(id: any) {
    this.service.delete(id).subscribe((id) => {
      //console.log(this.enfermeiro);

    });
  }

}
