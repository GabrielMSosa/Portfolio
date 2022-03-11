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
  

  constructor(private servicio:UserServiceService) { }

  ngOnInit(): void {

    this.servicio.GetUserService().subscribe((USERBD)=>{this.USERBD=USERBD});

  }

}
