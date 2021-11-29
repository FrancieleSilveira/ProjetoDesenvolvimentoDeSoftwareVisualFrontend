import { MenuComponent } from './components/views/menu/menu.component';
import { CadastrarEnfermeiroComponent } from './components/views/enfermeiro/cadastrar-enfermeiro/cadastrar-enfermeiro.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastrarSintomaComponent } from "./components/views/sintoma/cadastrar-sintoma/cadastrar-sintoma.component";
import { ListarSintomaComponent } from "./components/views/sintoma/listar-sintoma/listar-sintoma.component";
import { CadastrarPacienteComponent } from "./components/views/paciente/cadastrar-paciente/cadastrar-paciente.component";
import { ListarPacienteComponent } from "./components/views/paciente/listar-paciente/listar-paciente.component";
import { ListarEnfermeiroComponent } from './components/views/enfermeiro/listar-enfermeiro/listar-enfermeiro.component';
import { ListarConvenioComponent } from './components/views/convenio/listar-convenio/listar-convenio.component';
import { CadastrarConvenioComponent } from './components/views/convenio/cadastrar-convenio/cadastrar-convenio.component';
import { EditarConvenioComponent } from './components/views/convenio/editar-convenio/editar-convenio.component';
import { EditarPacienteComponent } from './components/views/paciente/editar-paciente/editar-paciente.component';
import { EditarEnfermeiroComponent } from './components/views/enfermeiro/editar-enfermeiro/editar-enfermeiro.component';
import { EditarSintomaComponent } from './components/views/sintoma/editar-sintoma/editar-sintoma.component';
import { CadastrarTriagemComponent } from './components/views/triagem/cadastrar-triagem/cadastrar-triagem.component';
import { ListarTriagemComponent } from './components/views/triagem/listar-triagem/listar-triagem.component';
import { ListarAtendimentoComponent } from './components/views/atendimento/listar-atendimento/listar-atendimento.component';
import { CadastrarAtendimentoComponent } from './components/views/atendimento/cadastrar-atendimento/cadastrar-atendimento.component';

const routes: Routes = [
        
    {
        path: "",
        component: MenuComponent,
    },

    //convênio

    {
        path: "convenio/listar",
        component: ListarConvenioComponent,
    },
    {
        path: "convenio/cadastrar",
        component: CadastrarConvenioComponent,
    },
    {
        path: "convenio/editar",
        component: EditarConvenioComponent,
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
        path: "sintoma/editar",
        component: EditarSintomaComponent,
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
    {
        path: "paciente/editar",
        component: EditarPacienteComponent,
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
    {
        path: "enfermeiro/editar",
        component: EditarEnfermeiroComponent,
    },

    //atendimento
    {
        path: "atendimento/cadastrar",
        component: CadastrarAtendimentoComponent,
    },
    {
        path: "atendimento/listar",
        component: ListarAtendimentoComponent,
    },

    //triagem
    {
        path: "triagem/cadastrar",
        component: CadastrarTriagemComponent,
    },
    {
        path: "triagem/listar",
        component: ListarTriagemComponent,
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
