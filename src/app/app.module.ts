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
    ItemExpComponent

  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
