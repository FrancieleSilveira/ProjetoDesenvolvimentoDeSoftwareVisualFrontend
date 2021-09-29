import { Component, OnInit } from "@angular/core";
import { Sintoma } from "src/app/models/sintoma";
import { SintomaService } from "src/app/services/sintoma.service";

@Component({
    selector: "app-listar-sintoma",
    templateUrl: "./listar-sintoma.component.html",
    styleUrls: ["./listar-sintoma.component.css"],
})
export class ListarSintomaComponent implements OnInit {
    sintomas: Sintoma[] = [];

    constructor(private service: SintomaService) {}

    ngOnInit(): void {
        this.service.list().subscribe((sintomas) => {
            this.sintomas = sintomas;
            console.log(sintomas);
        });
    }
}
