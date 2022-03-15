import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { NavheaderComponent } from '../components/navheader/navheader.component';
import { HeaderComponent } from '../components/header/header.component';
import { AcercadeComponent } from '../components/acercade/acercade.component';
import { BtnLapizComponent } from '../components/btn-lapiz/btn-lapiz.component';
import { AddTextComponent } from '../components/add-text/add-text.component';
import { ExperienciaComponent } from '../components/experiencia/experiencia.component';
import { ItemExpComponent } from '../components/item-exp/item-exp.component';
import {HttpClientModule}from "@angular/common/http";
import { NewExpComponent } from '../components/new-exp/new-exp.component'
import { FormsModule } from '@angular/forms';
import { EducacionComponent } from '../components/educacion/educacion.component';
import { ItemEduComponent } from '../components/item-edu/item-edu.component';
import { AddEduComponent } from '../components/add-edu/add-edu.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { SkillsItemComponent } from '../components/skills-item/skills-item.component';
import { SkillsAddComponent } from '../components/skills-add/skills-add.component';
import{ Skills1Component} from '../components/skills1/skills1.component';
import { HomeComponent } from '../components/home/home.component';
import { LogginComponent } from '../components/loggin/loggin.component';
const routes:Routes=[
{path:'',component:HomeComponent},
{path:'login', component:LogginComponent}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
