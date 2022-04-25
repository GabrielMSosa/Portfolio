import { Component,Output,Input,EventEmitter ,OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import{ CookieService } from "ngx-cookie-service";
@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})
export class NavheaderComponent implements OnInit {
public User: boolean=  false;

  constructor(private Auth:LoginserviceService,private cookies:CookieService) { }

  ngOnInit(): void {

  if (this.cookies.get("token") !== "")
  {
      this.User=true;


  }
  else{
    this.User=false;

  }
  this.User=true;
  console.log(this.cookies.get("token"));
console.log(this.User);
  }
  CerrarSesion() {
    this.User=false;
  this.Auth.setTokenService("");
  console.log(this.cookies.get("token"));
  console.log(this.User);
  }
}
