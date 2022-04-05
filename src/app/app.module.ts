import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {Chart} from 'node_modules/chart.js';
import { NavheaderComponent } from './components/navheader/navheader.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { BtnLapizComponent } from './components/btn-lapiz/btn-lapiz.component';
import { AddTextComponent } from './components/add-text/add-text.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ItemExpComponent } from './components/item-exp/item-exp.component';
import {HttpClientModule}from "@angular/common/http";
import { NewExpComponent } from './components/new-exp/new-exp.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ItemEduComponent } from './components/item-edu/item-edu.component';
import { AddEduComponent } from './components/add-edu/add-edu.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsItemComponent } from './components/skills-item/skills-item.component';
import { SkillsAddComponent } from './components/skills-add/skills-add.component';
import { NgChartsModule } from 'ng2-charts';
import{ AppRoutingModule } from './routing/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LogginComponent } from './components/loggin/loggin.component';
import { CookieService } from 'ngx-cookie-service';
import { Skills1Component } from './components/skills1/skills1.component';
import { LengProgComponent } from './components/leng-prog/leng-prog.component';
import { IdiomaComponent } from './components/idioma/idioma.component';
import { AddLangComponent } from './components/add-lang/add-lang.component';
import { AddProgComponent } from './components/add-prog/add-prog.component';
import { BtnEditLapizComponent } from './components/btn-edit-lapiz/btn-edit-lapiz.component';
import { FooterComponent } from './components/footer/footer.component';
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
    AddEduComponent,
    SkillsComponent,
    SkillsItemComponent,
    SkillsAddComponent,
    HomeComponent,
    LogginComponent,
    Skills1Component,
    LengProgComponent,
    IdiomaComponent,
    AddLangComponent,
    AddProgComponent,
    BtnEditLapizComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,NgChartsModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 