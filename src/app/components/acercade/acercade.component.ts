import { Component, OnInit } from '@angular/core';
import { USER} from 'src/app/USER';
import { Users } from 'src/app/mock-user';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import {UserServiceService} from 'src/app/service/user-service.service';
import{ CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  AddItem:boolean = false;
  USERBD:USER[] =[];
  flag:boolean = false;
  flageditItem:boolean =false;
  editar:boolean = false;
  ParaEnviar:USER ={
        nombre:"",
        apellido:"",
        telefono:"",
        email:"",
        edad:"",
        acercademi:"",
        urlImg:""
  };
  

  constructor(private servicio:UserServiceService) { }

  ngOnInit(): void {

    this.servicio.GetUserService().subscribe((USERBD)=>{this.USERBD=USERBD});

  }
  SendEdit(recorre:USER) {
    console.log(JSON.stringify(recorre));
    console.log("FUNCION SEND EDIT")
    this.ParaEnviar=recorre;
    this.editar=true;
    this.AddItem=!this.AddItem;

  }

  AddUser(entrada:USER) {
    console.log("estamos en la funcion add user que recibe el JSON de USER y vale:")
    console.log(JSON.stringify(entrada));
    console.log("entramos al id del get de la base de datos y vale:");
    console.log(this.USERBD[0].id);
    entrada.id=this.USERBD[0].id;

    this.servicio.PutUserServi(entrada).subscribe(()=>{
      this.USERBD=this.USERBD.filter(t=>t.id!==entrada.id);
      this.servicio.GetUserService().subscribe((USERBD)=>{this.USERBD=USERBD});
    //resulta que si no pongo el get aca cuando hago el put no me aparece en el template
    // el cambio y si no aparece tengo que apretar F5 y la idea es que sea dinamico y autonomo.
    
    })
    
    console.log("Para editar nuevo componente");
    this.AddItem=!this.AddItem;  
    





  }

  IraEdit(){
  

}}