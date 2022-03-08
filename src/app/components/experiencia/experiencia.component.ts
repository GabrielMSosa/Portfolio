import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Experiencias } from 'src/app/mock-experience';
import { EXPE } from 'src/app/Experience';
import { TaskService } from 'src/app/service/task.service';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import{ CookieService } from "ngx-cookie-service";
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
 AddItem:boolean = false;
 flageditItem:boolean =false;
EXPBD:EXPE[] =[];
 flag:boolean = false;
 editar:boolean = false;
 ParaEnviar:EXPE ={
  trabajo:"", 
  empresa:"",
  FechaIni:0,
  FechaFin:0,
  deltaanio:"",
  Localidad:"",
  Provincias:"",
  Pais:"",
  UriImg:""
 };



  constructor(private tareas:TaskService,private cookies:CookieService,private Auth: LoginserviceService) { }

  ngOnInit(): void {
    this.tareas.getExps().subscribe((EXPBD)=>{this.EXPBD=EXPBD});
    if(this.cookies.get("token")===""){
      this.flag=true;

    }
    else{
      this.flag=false;
    }

  }
  addNewTask(){
    console.log("NuevaTarea!");
    this.AddItem=!this.AddItem;
    console.log(this.AddItem);
    this.flag=false;
    if(this.cookies.get("token")===""){
      this.flag=true;

    }
  }

  SendEdit(recorre:EXPE){
    console.log("FUNCION SEND EDIT")
    this.ParaEnviar=recorre;
    this.editar=true;
    this.AddItem=!this.AddItem;
  }
  AddEditItem(){
    this.flageditItem=true
  }

  
  AddExp(entrada:EXPE){
      if(this.flageditItem==false){
        console.log("nuevo Skill");
      this.tareas.serviAddExp(entrada).subscribe((entrada)=>{this.EXPBD.push(entrada)});    
      this.AddItem=!this.AddItem;  
    }
      else{
    
        this.tareas.PutExpServi(entrada).subscribe(()=>{
          this.EXPBD=this.EXPBD.filter(t=>t.id!==entrada.id);
          this.tareas.getExps().subscribe((EXPBD)=>{this.EXPBD = EXPBD});
        //resulta que si no pongo el get aca cuando hago el put no me aparece en el template
        // el cambio y si no aparece tengo que apretar F5 y la idea es que sea dinamico y autonomo.
        
        })
        console.log("Para editar nuevo componente");
        this.AddItem=!this.AddItem;  
        
      }
     





  }
  
  DeleteExp(entrada:EXPE){
    this.tareas.DeleteServiceExp(entrada).subscribe(()=>{
      this.EXPBD=this.EXPBD.filter(t => t.id !==entrada.id)

    })
  }

}
