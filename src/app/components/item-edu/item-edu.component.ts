import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EDU} from 'src/app/Edu';
import { Educacion } from 'src/app/mock-Educacion';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import{ CookieService } from "ngx-cookie-service";
@Component({
  selector: 'app-item-edu',
  templateUrl: './item-edu.component.html',
  styleUrls: ['./item-edu.component.css']
})
export class ItemEduComponent implements OnInit {
  @Input() educacion:EDU = Educacion[0];
  @Input() newitem:boolean = false;
  @Output() DeleteExp: EventEmitter<EDU>=new EventEmitter;
  Imagen:string ="";
  flag:boolean = false;
  flaglocal:boolean = false;
  @Output() newitem2:EventEmitter< boolean> =new EventEmitter(false);
  @Output() EditItem:EventEmitter<EDU>=new EventEmitter;
  


  constructor(private cookies:CookieService) { }

  ngOnInit(): void {

  
      this.flag=false;
  

  }
  EditarExperiencia(input1:EDU){

    this.flaglocal=!this.flaglocal;
  
    console.log("funcion editar");
    this.EditItem.emit(input1); 


  }
  BorrarExperiencia(input1:EDU){
    console.log(this.educacion.id);
    this.DeleteExp.emit(input1);
  }
}
