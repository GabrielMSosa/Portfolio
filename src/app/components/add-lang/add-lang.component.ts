import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import {Idiomas} from "src/app/mock-idioma";
import {SkillServiceService} from "../../service/skill-service.service";
import {IDIO} from "src/app/IDIO";
import { FormsModule } from '@angular/forms';
import { Experiencias } from 'src/app/mock-experience';
import { EXPE } from 'src/app/Experience';
@Component({
  selector: 'app-add-lang',
  templateUrl: './add-lang.component.html',
  styleUrls: ['./add-lang.component.css']
})
export class AddLangComponent implements OnInit {
  @Output() InIdio:EventEmitter<IDIO>=new EventEmitter(); 
  @Output() newEdit:EventEmitter<boolean> = new EventEmitter(false);
  @Input() newitem:boolean = false;
  @Input() flagedit:boolean = false;
  @Input() datoedit:IDIO={
    idioma:"",
    
    nivel_lectura:"",
    nivel_escritura:""

  };

   id?:number=0;
   idioma:string="";
   nivel_lectura: string="";
   nivel_escritura: string="";
   Opciones:string[]=["Nada","Basico","Avanzado","Muy avanzado","Bilingue","Nativo"];
   IdioOpc:string[]=["Inglés","Chino","Hindi","Español","Francés","Árabe","Bengalí","Ruso","Portugués","Indonesio","Urdu","Alemán","Japonés","Panyabí","Javanés","Chino","Telugú","Turco","Coreano","Maratí"];
   selectedValue:string="";
   error: boolean=false;
   mensaje: string="";
   /**
    *      id?: number,
     idioma:string,
     nivel_lectura: string,
     nivel_escritura: string
    */

   constructor() { }

 ngOnInit(): void {
   
 }

 enviaExp(){

  if(this.idioma.length===0){
    this.error=true;
    this.mensaje+= "-Ingrese el campo de Idiomoa \n";  }
    if(this.nivel_escritura.length===0){
      this.error=true;
      this.mensaje+= "-Ingrese el campo de nivel de escritura. \n";  }
      if(this.nivel_lectura.length===0){
        this.error=true;
        this.mensaje+= "-Ingrese el campo de nivel de lectura. \n";  }

    

if(this.error==true&&this.flagedit==false){
alert(this.mensaje)
this.mensaje="";
}

if (this.error==false){

if(this.flagedit==true){
  this.datoedit.idioma=this.idioma;
  this.datoedit.nivel_escritura=this.nivel_escritura;
  this.datoedit.nivel_lectura=this.nivel_lectura;
  this.newEdit.emit(true);
  this.InIdio.emit(this.datoedit);  

}

else{  
const {idioma,nivel_lectura,nivel_escritura}=this;
const NewSKILL= {idioma,nivel_lectura,nivel_escritura};
console.log(NewSKILL);
this.InIdio.emit(NewSKILL);
this.newitem=true;
 }





}
 }}
