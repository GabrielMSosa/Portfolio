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
EXPBD:EXPE[] =[];
 flag:boolean = false;
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
  AddExp(entrada:EXPE){
      this.tareas.serviAddExp(entrada).subscribe((entrada)=>{this.EXPBD.push(entrada)});    


  }
  
  DeleteExp(entrada:EXPE){
    this.tareas.DeleteServiceExp(entrada).subscribe(()=>{
      this.EXPBD=this.EXPBD.filter(t => t.id !==entrada.id)

    })
  }

}
