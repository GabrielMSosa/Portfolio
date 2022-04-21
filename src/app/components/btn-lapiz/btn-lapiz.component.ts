import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';
import { USER} from 'src/app/USER';
import { Users } from 'src/app/mock-user';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import{ CookieService } from "ngx-cookie-service";
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-btn-lapiz',
  templateUrl: './btn-lapiz.component.html',
  styleUrls: ['./btn-lapiz.component.css']
})
export class BtnLapizComponent implements OnInit {
 Users:USER[] =[];
  @Input() newitem:boolean = false;
  @Output() DeleteExp: EventEmitter<USER>=new EventEmitter;
  Imagen:string ="";

  flag:boolean = false;
  flaglocal:boolean = false;
  @Output() newitem2:EventEmitter< boolean> =new EventEmitter(false);
  @Output() EditItem:EventEmitter<USER>=new EventEmitter;
  BtnClick:boolean = false;
  info:string = "Aca va informacion personal mia";
  constructor(private cookies:CookieService,private serviUser:UserServiceService) { }
/*
id:0,
        Nombre:"Gabriel Matias",
        Apellido:"Sosa",
        Telefono:"+5493755261740",
        email:"sosagabriel79@gmail.com",
        Edad:"31",
        Acercademi:"Me encanta innovar, generar nuevas metodologias para mejorar procedimientos y siempre seguir aprendiendo ",
        UrlImg:"https://drive.google.com/file/d/1SV2lNnz2bJb5gKYnzlGuA4tgmJmHDRYf/view?usp=sharing",
*/



  ngOnInit(): void {
  this.serviUser.GetUserService().subscribe((Users) => {
      console.log(JSON.stringify(Users));
    this.Users=Users
  
  });

    console.log(this.Users[0].email);
    if(this.cookies.get("token")===""){
      this.flag=true;

    }
    else{
      this.flag=false;
    }
    console.log("valor  de flag"+this.flag);
    console.log("valor de cookies:"+this.cookies.get("token"));


  }
  On1Click(){
this.BtnClick=!this.BtnClick;
this.newitem2.emit(true);

}
updateInfo( entrada:string){
this.info=entrada;

}


}
