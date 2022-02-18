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
import { FormsModule } from '@angular/forms';
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
    LogginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,NgChartsModule,
    AppRoutingModule
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 