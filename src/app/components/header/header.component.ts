import { Component, OnInit } from '@angular/core';
import { USER} from 'src/app/USER';
import { Users } from 'src/app/mock-user';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import {UserServiceService} from 'src/app/service/user-service.service';
import{ CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  USERBD:USER[] =[];
  constructor(private servicio:UserServiceService) { }
  
  ngOnInit(): void {
    this.servicio.GetUserService().subscribe((USERBD)=>{this.USERBD=USERBD});
  }

}
