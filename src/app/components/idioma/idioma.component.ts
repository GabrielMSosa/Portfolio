import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import {IDIO} from "src/app/IDIO";
import {SkillServiceService} from "../../service/skill-service.service";
import {Idiomas} from "src/app/mock-idioma";
import { LoginserviceService } from 'src/app/service/loginservice.service';
import{ CookieService } from "ngx-cookie-service";
@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {

  @Input() IdioInput:IDIO=Idiomas[0];
  @Input() newitem1:boolean = false;
  @Output() DeleteIDIO: EventEmitter<IDIO>=new EventEmitter;
  @Output() EditIDio:EventEmitter<IDIO>=new EventEmitter;
  Imagen:string ="";
  flag:boolean = false; // CON ESTE ES PARA VALIDAR EL TOKEN
  //"How are you?".slice(8, 11); slice se usa para mostrar solo el string desde el caracter 8 al 11
    constructor(private servi:SkillServiceService,private cookies:CookieService) { }
  


  ngOnInit(): void {
    //console.log("bandera"+ this.newitem1)

    if(this.cookies.get("token")!=="") {
      this.flag=true;

   }
   else  {
    this.flag=false;
   }

  }

  BorrarIDIO(entrada:IDIO){
    //console.log("Funcion borrar");
    this.DeleteIDIO.emit(entrada);

  }
    EditarIDIO(entrada:IDIO){
      this.EditIDio.emit(entrada);
      //console.log("Funcion Editar"+entrada.id);    
    }

}
