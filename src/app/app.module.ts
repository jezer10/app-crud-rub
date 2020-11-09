import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FootbarComponent } from './components/footbar/footbar.component';
import { MaterialModule } from './material.module';
import { AddPersonaComponent } from './modules/Persona/add-persona/add-persona.component';
import { EditPersonaComponent } from './modules/Persona/edit-persona/edit-persona.component';
import { DeletePersonaComponent } from './modules/Persona/delete-persona/delete-persona.component';
import { ListPersonaComponent } from './modules/Persona/list-persona/list-persona.component';
import { ListTipoDocumentoComponent } from './modules/TipoDocumento/list-tipo-documento/list-tipo-documento.component';
import { EditTipoDocumentoComponent } from './modules/TipoDocumento/edit-tipo-documento/edit-tipo-documento.component';
import { DeleteTipoDocumentoComponent } from './modules/TipoDocumento/delete-tipo-documento/delete-tipo-documento.component';
import { AddTipoDocumentoComponent } from './modules/TipoDocumento/add-tipo-documento/add-tipo-documento.component';
import { TipodocumentoService } from './services/TipoDocumento/tipodocumento.service';
import { PersonaService } from './services/Persona/persona.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FootbarComponent,
    AddPersonaComponent,
    EditPersonaComponent,
    DeletePersonaComponent,
    ListPersonaComponent,
    ListTipoDocumentoComponent,
    EditTipoDocumentoComponent,
    DeleteTipoDocumentoComponent,
    AddTipoDocumentoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [PersonaService,TipodocumentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
