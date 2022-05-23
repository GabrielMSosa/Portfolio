import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import {Idiomas} from "src/app/mock-idioma";
import {SkillServiceService} from "../../service/skill-service.service";
import {IDIO} from "src/app/IDIO";
import { Experiencias } from 'src/app/mock-experience';
import { EXPE } from 'src/app/Experience';
import { FormsModule,Validators,FormGroup,FormBuilder } from '@angular/forms';
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
  form:FormGroup;
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

     constructor( private formBuilder: FormBuilder) 
     {this.form=this.formBuilder.group({
       idioma :['',[Validators.required,]],
       nivel_escritura:['',Validators.required],
       nivel_lectura:['',[Validators.required,]]  
     })
     }



 ngOnInit(): void {
   
 }

 enviaExp(){
/*
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
*/
this.error=false;

if (this.error==false){

if(this.flagedit==true){
  this.datoedit.idioma=this.form.value.idioma;
  this.datoedit.nivel_escritura=this.form.value.nivel_escritura;
  this.datoedit.nivel_lectura=this.form.value.nivel_lectura;
  //console.log("valor de lectura seleccionado en el form"+this.datoedit.nivel_lectura);
//  console.log("valor de escritura seleccionado en el form"+this.datoedit.nivel_escritura);
  this.newEdit.emit(true);
  this.InIdio.emit(this.datoedit);  

}

else{  
  this.datoedit.idioma=this.form.value.idioma;
  this.datoedit.nivel_escritura=this.form.value.nivel_escritura;
  this.datoedit.nivel_lectura=this.form.value.nivel_lectura;
  //console.log("valor de lectura seleccionado en el form"+this.datoedit.nivel_lectura);
  //console.log("valor de escritura seleccionado en el form"+this.datoedit.nivel_escritura);
  this.InIdio.emit(this.datoedit);
  this.newitem=true;
 }





}
 }
 get Idioma(){
  return this.form.get('idioma');
}

 get Nivel_lectura(){
  return this.form.get('nivel_lectura');
}

 get Nivel_escritura(){
  return this.form.get('nivel_escritura');
}




}
