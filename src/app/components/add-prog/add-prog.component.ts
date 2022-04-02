import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import {Idiomas} from "src/app/mock-idioma";
import {SkillServiceService} from "../../service/skill-service.service";
import {SKILL} from "src/app/SKILL";
import { FormsModule } from '@angular/forms';
import { skills } from 'src/app/mock-Skill';


@Component({
  selector: 'app-add-prog',
  templateUrl: './add-prog.component.html',
  styleUrls: ['./add-prog.component.css']
})
export class AddProgComponent implements OnInit {
  @Output() inSkill:EventEmitter<SKILL>=new EventEmitter(); 
  @Output() newEditSkill:EventEmitter<boolean> = new EventEmitter(false);
  @Input() newitem:boolean = false;
  @Input() flagedit1:boolean = false;
  @Input() datoedit1:SKILL={
    lenguaje:"",
    info:"",
    nivel:"",
    urlImg:""
    
  };
/*export interface SKILL{
    id?:number;
    lenguaje:string;
    info:string;
    UrlImg:string;
    }
    */
    lenguaje:string="";
    info:string="";
    urlImg:string="";
    nivel:string="";
    tokenGo:string="";
    linkaux:string []=[ "https://drive.google.com/uc?id=","&export=download"];

  id?:number=0;
  error: boolean=false;
  mensaje: string="";
  constructor() { }

  ngOnInit(): void {
  }

  enviaSkill(){
this.urlImg=this.linkaux[0]+this.tokenGo+this.linkaux[1]

    if(this.lenguaje.length===0){
      this.error=true;
      this.mensaje+= "-Ingrese el campo de lenguaje \n";  }
      if(this.info.length===0){
        this.error=true;
        this.mensaje+= "-Ingrese el campo de informacion. \n";  }
        if(this.nivel.length===0){
          this.error=true;
          this.mensaje+= "-Ingrese el campo de nivel. \n";  }
        
      
  
  if(this.error==true&&this.flagedit1==false){
  alert(this.mensaje)
  this.mensaje="";
  }
  
  if (this.error==false){
  
  if(this.flagedit1==true){
    this.nivel=this.nivel+"%";
    this.datoedit1.lenguaje=this.lenguaje;
    this.datoedit1.info=this.info;
    this.datoedit1.urlImg=this.urlImg;
    this.datoedit1.nivel=this.nivel;
    this.newEditSkill.emit(true);
    this.inSkill.emit(this.datoedit1);  
  
  }
  
  else{  this.nivel=this.nivel+"%";
  const {lenguaje,info,nivel,urlImg}=this;
  const NewSKILL= {lenguaje,info,nivel,urlImg};
  console.log(NewSKILL);
  this.inSkill.emit(NewSKILL);
  this.newitem=true;
   }
  
  
  
  
  
  }
   }



  }


