import { Component, OnInit } from "@angular/core";
import { Sintoma } from "src/app/models/sintoma";
import { SintomaService } from "src/app/services/sintoma.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-listar-sintoma",
    templateUrl: "./listar-sintoma.component.html",
    styleUrls: ["./listar-sintoma.component.css"],
})
export class ListarSintomaComponent implements OnInit {

    sintomas: Sintoma[] = [];

    constructor(private router: Router, private service: SintomaService) {}

    ngOnInit(): void {
        this.service.list().subscribe((sintomas) => {
            this.sintomas = sintomas;
            console.log(sintomas);
        });
    }

    deletar(id: any) {
        this.service.delete(id).subscribe((id) => {});
        this.router.navigate([""]);
    }
}
