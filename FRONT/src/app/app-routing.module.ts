import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarSintomaComponent } from "./components/views/sintoma/cadastrar-sintoma/cadastrar-sintoma.component";
import { ListarSintomaComponent } from "./components/views/sintoma/listar-sintoma/listar-sintoma.component";
const routes: Routes = [
    {
        path: "",
        component: ListarSintomaComponent,
    },
    {
        path: "sintoma/listar",
        component: ListarSintomaComponent,
    },
    {
        path: "sintoma/cadastrar",
        component: CadastrarSintomaComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
