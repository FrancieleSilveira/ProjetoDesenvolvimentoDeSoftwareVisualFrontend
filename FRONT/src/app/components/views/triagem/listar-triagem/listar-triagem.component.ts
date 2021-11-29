import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-triagem',
  templateUrl: './listar-triagem.component.html',
  styleUrls: ['./listar-triagem.component.css']
})
export class ListarTriagemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // triagens: Triagem[] = [];

  //   constructor(private router: Router, private service: TriagemService) {}

  //   ngOnInit(): void {
  //       this.service.list().subscribe((triagens) => {
  //           this.triagens = triagens;
  //           console.log(triagens);
  //       });
  //   }

}
