import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Educacion } from 'src/app/mock-Educacion';
import { EDU } from 'src/app/Edu';
import { EducacionService } from 'src/app/service/educacion.service';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import{ CookieService } from "ngx-cookie-service";
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  AddItem:boolean = false;
  EDUBD:EDU[] =[];
  flag:boolean = false;
  flageditItem:boolean =false;
  editar:boolean = false;
  ParaEnviar:EDU ={
    institucion:"", 
    titulo:"",
    fechaIni:0,
    fechaFin:0,
    estado:"",
    uriImg:""  
  };
  
  
  constructor(private tareas:EducacionService, private Auth:LoginserviceService,private cookies:CookieService) { }

  ngOnInit(): void {
    this.tareas.getServiceEdus().subscribe((EDUBD)=>{this.EDUBD=EDUBD});
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
  
  DeleteEdu(entrada:EDU){
    this.tareas.DeleteServiceEdu(entrada).subscribe(()=>{
      this.EDUBD=this.EDUBD.filter(t => t.id !==entrada.id)

    })
  }
  AddEdu(entrada:EDU){
    
    if(this.flageditItem==false){
      console.log("nuevo Skill");
      this.tareas.serviAddEdu(entrada).subscribe((entrada)=>{this.EDUBD.push(entrada)
        this.tareas.getServiceEdus().subscribe((EDUBD)=>{this.EDUBD=EDUBD});
      });    
      
    this.AddItem=!this.AddItem;  
  }
    else{
  
      this.tareas.PutEduServi(entrada).subscribe(()=>{
        this.EDUBD=this.EDUBD.filter(t=>t.id!==entrada.id);
        this.tareas.getServiceEdus().subscribe((EDUBD)=>{this.EDUBD=EDUBD});
      //resulta que si no pongo el get aca cuando hago el put no me aparece en el template
      // el cambio y si no aparece tengo que apretar F5 y la idea es que sea dinamico y autonomo.
      
      })
      console.log("Para editar nuevo componente");
      this.AddItem=!this.AddItem;  
      
    }
   

}
SendEdit(recorre:EDU){
  console.log("FUNCION SEND EDIT")
  this.ParaEnviar=recorre;
  this.editar=true;
  this.AddItem=!this.AddItem;
}

AddEditItem(){
  this.flageditItem=true;
}




}
