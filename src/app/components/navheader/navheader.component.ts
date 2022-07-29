import { Component,Output,Input,EventEmitter ,OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import{ CookieService } from "ngx-cookie-service";
import { UserServiceService } from 'src/app/service/user-service.service';
import { RSOCi } from 'src/app/RSOCI';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})
export class NavheaderComponent implements OnInit {
public User: boolean=  false;
simbolo:string="";
SOCIBD:RSOCi[]=[];
  constructor(private autent:AutenticacionService ,private Auth:LoginserviceService,private servi:UserServiceService,private MiRouter: Router ,private cookies:CookieService) { }

  ngOnInit(): void {
    this.simbolo="< / >";
    this.servi.GetRsociService().subscribe((SOCIBD)=>{this.SOCIBD=SOCIBD
      console.log(SOCIBD[0].linkGit);
    }
    );
/*
  if (this.cookies.get("token") !== "")
  {
      this.User=true;


  }
  else{
    this.User=false;

  }
  this.User=true;*/
  //console.log(this.cookies.get("token"));
//console.log(this.User);
  }
  CerrarSesion() {
    this.User=false;
    this.autent.cerrarCesion();
    this.MiRouter.navigateByUrl("login");
  this.Auth.setTokenService("");
  //console.log(this.cookies.get("token"));
  //console.log(this.User);
  }
}
