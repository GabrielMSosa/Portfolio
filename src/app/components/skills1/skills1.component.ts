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
  public Archivos: any =[];
  public ArchGuardar: ARCH= { id:0,
  nombre:"", 
  imagen:""};//inicializo
    public mostrar:boolean = false;

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
  constructor(private servi:SkillServiceService,private cookies:CookieService) { }

  ngOnInit(): void {
    this.servi.GetSkillService().subscribe((skillBD)=>{this.skillBD = skillBD});
    this.servi.GetIdiomaService().subscribe((IdiomaBD)=>{this.IdiomaBD = IdiomaBD});
    if(this.cookies.get("token")===""){
      this.flag=true;

    }
    else{
      this.flag=false;
    }

  }

  BorrarSkill(ENTRADA:SKILL){
this.servi.DeleteSkillServi(ENTRADA).subscribe(()=>{
this.skillBD=this.skillBD.filter(t=>t.id!==ENTRADA.id);
}) }

BorrarIdio(entrada:IDIO){}


addNewTSkill(){} 

addNewLang(){}

}
