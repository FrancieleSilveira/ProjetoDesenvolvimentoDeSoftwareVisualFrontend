import { MenuComponent } from './components/views/menu/menu.component';
import { CadastrarEnfermeiroComponent } from './components/views/enfermeiro/cadastrar-enfermeiro/cadastrar-enfermeiro.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarSintomaComponent } from "./components/views/sintoma/cadastrar-sintoma/cadastrar-sintoma.component";
import { ListarSintomaComponent } from "./components/views/sintoma/listar-sintoma/listar-sintoma.component";
import { DeletarSintomaComponent } from "./components/views/sintoma/deletar-sintoma/deletar-sintoma.component";
import { CadastrarPacienteComponent } from "./components/views/paciente/cadastrar-paciente/cadastrar-paciente.component";
import { ListarPacienteComponent } from "./components/views/paciente/listar-paciente/listar-paciente.component";
import { ListarEnfermeiroComponent } from './components/views/enfermeiro/listar-enfermeiro/listar-enfermeiro.component';


const routes: Routes = [
        
    {
        path: "menu/listar",
        component: MenuComponent,
    },

    //sintoma

    {
        path: "sintoma/listar",
        component: ListarSintomaComponent,
    },
    {
        path: "sintoma/cadastrar",
        component: CadastrarSintomaComponent,
    },
    {
        path: "sintoma/deletar",
        component: DeletarSintomaComponent,
    },

    //paciente
    {
        path: "paciente/cadastrar",
        component: CadastrarPacienteComponent,
    },
    {
        path: "paciente/listar",
        component: ListarPacienteComponent,

    },
    //enfermeiro

    {
        path: "enfermeiro/listar",
        component: ListarEnfermeiroComponent,
    },
    {
        path: "enfermeiro/cadastrar",
        component: CadastrarEnfermeiroComponent,

    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
