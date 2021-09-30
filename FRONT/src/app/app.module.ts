import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
// Imports dos componentes da aplicação
import { AppComponent } from "./app.component";
import { CadastrarSintomaComponent } from "./components/views/sintoma/cadastrar-sintoma/cadastrar-sintoma.component";
import { ListarSintomaComponent } from "./components/views/sintoma/listar-sintoma/listar-sintoma.component";

@NgModule({
    declarations: [
        AppComponent,
        ListarSintomaComponent,
        CadastrarSintomaComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
