import {SubirimgService } from 'src/app/service/subirimg.service';
import {ARCH} from 'src/app/ARCH';
import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import {SKILL} from "src/app/SKILL";
import {SkillServiceService} from "../../service/skill-service.service";
import {IDIO} from "src/app/IDIO";
import { LoginserviceService } from 'src/app/service/loginservice.service';
import{ CookieService } from "ngx-cookie-service";
@Component({
  selector: 'app-skills1',
  templateUrl: './skills1.component.html',
  styleUrls: ['./skills1.component.css']
})
export class Skills1Component implements OnInit {
  flageditskill:boolean = false;//si es true viene de add prog para editar una ubicacion del json de la db
  flageditidio:boolean = false; //si es true viene de add leng para editar una ubicacion del json de la db
  public Archivos: any =[];
  public ArchGuardar: ARCH= { id:0,
  nombre:"", 
  imagen:""};//inicializo
    public mostrar:boolean = false;
    AddItem:boolean = false;
    AddItem1:boolean = false;
  public archiGETBD:ARCH[]=[];
  public Lastimg:number=0;
 barra:string = "";
 estilo:string = "";
 public imagePath:any;
 imgURL: any;
 public message:string="";
 age: string="";
 skillBD:SKILL[]=[];
 IdiomaBD:IDIO[]=[]; 
 flag:boolean = false;
 barra2:string="10%";
 
  ParaEnviar:IDIO={
    idioma:"",
    nivel_lectura:  "",
    nivel_escritura: ""

  };
  editar:boolean = false;
  editar1:boolean = false;
  ParaEnviar1:SKILL ={
    lenguaje: "",
    info: "",
    nivel:"",
    urlImg: ""
  }

 
  constructor(private servi:SkillServiceService,private cookies:CookieService) { }

  ngOnInit(): void {
    this.servi.GetSkillService().subscribe((skillBD)=>{this.skillBD = skillBD});
    this.servi.GetIdiomaService().subscribe((IdiomaBD)=>{this.IdiomaBD = IdiomaBD});
    
 
    console.log("bandera de habilitacion"+this.AddItem);
  
    this.flag=false;
  }

  BorrarSkill(ENTRADA:SKILL){
this.servi.DeleteSkillServi(ENTRADA).subscribe(()=>{
this.skillBD=this.skillBD.filter(t=>t.id!==ENTRADA.id);
}) }

BorrarIdio(entrada:IDIO){
  this.servi.DeleteIdioServi(entrada).subscribe(()=>{
  this.IdiomaBD=this.IdiomaBD.filter(t=>t.id!==entrada.id);

  })

}
SendEdit1(entrada:SKILL){

  console.log("FUNCION SEND EDIT")
  this.ParaEnviar1=entrada;
  this.editar1=true;
  this.AddItem1=!this.AddItem1;

}

SendEdit(entrada:IDIO){
  console.log("FUNCION SEND EDIT")
  this.ParaEnviar=entrada;
  this.editar=true;
  this.AddItem=!this.AddItem;

}

addNewTSkill(){
  console.log("NuevaTarea!");
this.AddItem1=!this.AddItem1;
console.log("bandera de habilitacion"+this.AddItem);
this.flag=false;
this.editar=false;

} 

addNewLang(){
console.log("NuevaTarea!");
this.AddItem=!this.AddItem;
console.log("bandera de habilitacion"+this.AddItem);
this.flag=false;
this.editar=false;

}

Addprog(entrada:SKILL){
  if(this.flageditskill==false){
    console.log("nuevo Skill");
  this.servi.serviAddSkill(entrada).subscribe((entrada)=>{this.skillBD.push(entrada)
    this.servi.GetSkillService().subscribe((skillBD)=>{this.skillBD = skillBD});
    
  });    
  this.AddItem1=!this.AddItem1;  
}
  else{

    this.servi.PutSkillServi(entrada).subscribe(()=>{
      this.skillBD=this.skillBD.filter(t=>t.id!==entrada.id);
      this.servi.GetSkillService().subscribe((skillBD)=>{this.skillBD = skillBD});
    //resulta que si no pongo el get aca cuando hago el put no me aparece en el template
    // el cambio y si no aparece tengo que apretar F5 y la idea es que sea dinamico y autonomo.
    
    })
    console.log("Para editar nuevo componente");
    this.AddItem1=!this.AddItem1;  
    
  }
  
}


addLang(entrada:IDIO){
  console.log("id en el componente papa"+entrada.id);
  console.log("Idioma componente papa"+entrada.idioma);
  console.log("nivel de escritura en el componente papa"+entrada.nivel_escritura);
  console.log("nivel de lectura en el componente papa"+entrada.nivel_lectura);



  if(this.flageditidio==false){
    console.log("nuevo idioma");
  this.servi.serviAddIdioma(entrada).subscribe((entrada)=>{this.IdiomaBD.push(entrada)
    this.servi.GetIdiomaService().subscribe((IdiomaBD)=>{this.IdiomaBD = IdiomaBD});
  });    
  this.AddItem=!this.AddItem;  
}
  else{

    this.servi.PutIdiomaServi(entrada).subscribe(()=>{
      this.IdiomaBD=this.IdiomaBD.filter(t=>t.id!==entrada.id);
      this.servi.GetIdiomaService().subscribe((IdiomaBD)=>{this.IdiomaBD = IdiomaBD});
    //resulta que si no pongo el get aca cuando hago el put no me aparece en el template
    // el cambio y si no aparece tengo que apretar F5 y la idea es que sea dinamico y autonomo.
    
    })
    console.log("Para editar nuevo componente");
    this.AddItem=!this.AddItem;  
    
  }
  
}
AddEditProg(){
  this.flageditskill=true
}
addEditLeng(){
  this.flageditidio=true;


}

}
