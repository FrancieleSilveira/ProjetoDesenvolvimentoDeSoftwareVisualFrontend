import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
// Imports dos componentes da aplicação
import { AppComponent } from "./app.component";
import { CadastrarSintomaComponent } from "./components/views/sintoma/cadastrar-sintoma/cadastrar-sintoma.component";
import { ListarSintomaComponent } from "./components/views/sintoma/listar-sintoma/listar-sintoma.component";

import { CadastrarPacienteComponent } from './components/views/paciente/cadastrar-paciente/cadastrar-paciente.component';
import { ListarPacienteComponent } from './components/views/paciente/listar-paciente/listar-paciente.component';
import { ListarEnfermeiroComponent } from "./components/views/enfermeiro/listar-enfermeiro/listar-enfermeiro.component";
import { CadastrarEnfermeiroComponent } from "./components/views/enfermeiro/cadastrar-enfermeiro/cadastrar-enfermeiro.component";
import { EditarEnfermeiroComponent } from "./components/views/enfermeiro/editar-enfermeiro/editar-enfermeiro.component";
import { MenuComponent } from "./components/views/menu/menu.component";


@NgModule({
    declarations: [
        AppComponent,
        ListarSintomaComponent,
        CadastrarSintomaComponent,

        CadastrarPacienteComponent,
        ListarPacienteComponent,
        ListarEnfermeiroComponent,
        CadastrarEnfermeiroComponent,
        EditarEnfermeiroComponent,
        MenuComponent

    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
