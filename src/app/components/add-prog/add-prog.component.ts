import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import {Idiomas} from "src/app/mock-idioma";
import {SkillServiceService} from "../../service/skill-service.service";
import {SKILL} from "src/app/SKILL";
import { skills } from 'src/app/mock-Skill';
import { FormsModule,Validators,FormGroup,FormBuilder } from '@angular/forms';

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

  form:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group({
      lenguaje:['',[Validators.required,Validators.minLength(9)]],
      info:['',[Validators.required,Validators.minLength(9)]],
      nivel:['',[Validators.required,Validators.minLength(1)]],
      urlImg :['',[Validators.required,Validators.minLength(32)]]
      
    })


   }


  
   

  ngOnInit(): void {
  }





  token1:string="";
  iniciot:number=0;
  fint:number=0;

  patron:string="/view";
  uritotal:string="";


  enviaSkill(){
    this.uritotal=this.form.value.urlImg;

    this.fint=this.uritotal.indexOf(this.patron);
    this.iniciot=this.fint-33;
    this.token1=this.uritotal.substring(this.iniciot, this.fint);
    console.log(this.token1);
    
this.urlImg=this.linkaux[0]+this.token1+this.linkaux[1]

/*
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
  */
 this.error=false;
  if (this.error==false){
  
  if(this.flagedit1==true){
    this.nivel=this.form.value.nivel;
    this.datoedit1.lenguaje=this.form.value.lenguaje;
    this.datoedit1.info=this.form.value.info;
    this.datoedit1.urlImg=this.urlImg;
    this.datoedit1.nivel=this.nivel;
    this.newEditSkill.emit(true);
    this.inSkill.emit(this.datoedit1);  
  
  }
  
  else{  
    
    this.nivel=this.form.value.nivel;
    this.datoedit1.lenguaje=this.form.value.lenguaje;
    this.datoedit1.info=this.form.value.info;
    this.datoedit1.urlImg=this.urlImg;
    this.datoedit1.nivel=this.nivel;
  this.inSkill.emit(this.datoedit1);
  this.newitem=true;
   }
  
  
  
  
  
  }
   }


   get Lenguaje(){
    return this.form.get('lenguaje');}
    get Info(){
    return this.form.get('info');}
    get Nivel(){
    return this.form.get('nivel');}
    get UrlImg(){
    return this.form.get('urlImg');}
 



  }


