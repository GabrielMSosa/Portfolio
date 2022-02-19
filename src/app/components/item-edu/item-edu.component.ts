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
  constructor(private cookies:CookieService) { }

  ngOnInit(): void {
    if(this.cookies.get("token")===""){
      this.flag=true;

    }
    else{
      this.flag=false;
    }


  }
  EditarExperiencia(input1:EDU){
    this.newitem
  }
  BorrarExperiencia(input1:EDU){
    console.log(this.educacion.id);
    this.DeleteExp.emit(input1);
  }
}
