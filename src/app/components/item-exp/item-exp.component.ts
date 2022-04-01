import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Experiencias } from 'src/app/mock-experience';
import { EXPE } from 'src/app/Experience';
import { TaskService } from 'src/app/service/task.service';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import{ CookieService } from "ngx-cookie-service";
import { throwIfEmpty } from 'rxjs';
@Component({
  selector: 'app-item-exp',
  templateUrl: './item-exp.component.html',
  styleUrls: ['./item-exp.component.css']
})
export class ItemExpComponent implements OnInit {
  @Input() experiencias:EXPE = Experiencias[0];
  @Input() newitem:boolean = false;
  flaglocal:boolean = false;
  @Output() newitem2:EventEmitter< boolean> =new EventEmitter(false);
  @Output() EditItem:EventEmitter<EXPE>=new EventEmitter;
  @Output() DeleteExp: EventEmitter<EXPE>=new EventEmitter;
  Imagen:string ="";
  flag:boolean = false;


  constructor(private cookies:CookieService
    
  ) { }

  ngOnInit(): void {
    console.log("Componente item exp");
   if(this.cookies.get("token")!=="") {
      this.flag=true;

   }
   else  {
    this.flag=false;
   }

  }


  BorrarExperiencia(entrada:EXPE){
    console.log(this.experiencias.id);
    this.DeleteExp.emit(entrada);

  }

  EditarExperiencia(entrada:EXPE){
     
  this.flaglocal=!this.flaglocal;
  
  console.log("funcion editar");
  this.EditItem.emit(entrada); 
  }




}
