import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import {SKILL} from "src/app/SKILL";
import {SkillServiceService} from "../../service/skill-service.service";
import {skills} from "src/app/mock-Skill";
import { LoginserviceService } from 'src/app/service/loginservice.service';
import{ CookieService } from "ngx-cookie-service";
@Component({
  selector: 'app-leng-prog',
  templateUrl: './leng-prog.component.html',
  styleUrls: ['./leng-prog.component.css']
})
export class LengProgComponent implements OnInit {
@Input() SkillInput1:SKILL=skills[0];
@Input() newitem:boolean = false;
@Output() DeleteSKILL: EventEmitter<SKILL>=new EventEmitter;
Imagen:string ="";
flag:boolean = false; // CON ESTE ES PARA VALIDAR EL TOKEN
//"How are you?".slice(8, 11); slice se usa para mostrar solo el string desde el caracter 8 al 11
  constructor(private servi:SkillServiceService,private cookies:CookieService) { }

  ngOnInit(): void {   
    if(this.cookies.get("token")!=="") {
      this.flag=true;

   }
   else  {
    this.flag=false;
   }

   }


  BorrarSKill(algo:SKILL){
console.log("Funcion borrar");
this.DeleteSKILL.emit(algo);
  }

  EditarSkill(algo:SKILL){
console.log("Funcion editar");


  } 





}
