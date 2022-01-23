import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavheaderComponent } from './components/navheader/navheader.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { BtnLapizComponent } from './components/btn-lapiz/btn-lapiz.component';
import { AddTextComponent } from './components/add-text/add-text.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ItemExpComponent } from './components/item-exp/item-exp.component';
import {HttpClientModule}from "@angular/common/http";
import { NewExpComponent } from './components/new-exp/new-exp.component'
import { FormsModule } from '@angular/forms';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ItemEduComponent } from './components/item-edu/item-edu.component';
import { AddEduComponent } from './components/add-edu/add-edu.component';
//##
 
@NgModule({
  declarations: [
    AppComponent,
    NavheaderComponent,
    HeaderComponent,
    AcercadeComponent,
    BtnLapizComponent,
    AddTextComponent,
    ExperienciaComponent,
    ItemExpComponent,
    NewExpComponent,
    EducacionComponent,
    ItemEduComponent,
    AddEduComponent

  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
