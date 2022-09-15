import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarComentarioComponent } from './components/agregar-editar-comentario/agregar-editar-comentario.component';
import { ListarComentariosComponent } from './components/listar-comentarios/listar-comentarios.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VerComentariosComponent } from './components/ver-comentarios/ver-comentarios.component';
import { ListarDatosPersonalesComponent } from './listar-datos-personales/listar-datos-personales.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListarComentariosComponent,
    VerComentariosComponent,
    AgregarEditarComentarioComponent,
    ListarDatosPersonalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
