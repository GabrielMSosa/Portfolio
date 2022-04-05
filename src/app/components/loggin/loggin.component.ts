import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import {Router} from "@angular/router";

@Component({
  
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {

  email: string="";
  password: string="";

  constructor(private UserSer:LoginserviceService, public MiRouter : Router) {
    //Mirouter router aca inyectamos en el constructor el router para que despues que hagamos clik en el router
    // en login y el token sea valido pueda ingresar a home 


   }

  ngOnInit(): void {
    console.log("TOKEN OBTENIDO DE SERVICIO"+this.UserSer.getTokenService());
  }

  

  login() {
    const user={email:this.email,password:this.password};
    console.log(this.email);
    console.log(this.password);
    this.UserSer.LoginServi(user).subscribe(
    data=>{
    console.log(data);
    this.UserSer.setTokenService(data.token); //seteo el token.
    this.MiRouter.navigateByUrl("/");
    },
    error => {
      console.log(error); //conesto vemos los errores
    }); //obtenemos el token que nos da el servicicio
    //que apunta a la api.
    /*******************************
     *  meter el email **eve.holt@reqres.in y la contraeña que quieras
     */
  }

}
