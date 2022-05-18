import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import {Router} from "@angular/router";
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
@Component({
  
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  help:boolean = false;
  form:FormGroup;
  email: string="";
  password: string="";
  deviceInfo:any;
  constructor(private autenticacion:AutenticacionService,private formBuilder: FormBuilder,private UserSer:LoginserviceService, public MiRouter : Router) {
    this.form=this.formBuilder.group({
        username:['',[Validators.required,Validators.minLength(3)]],   
        password:['',[Validators.required,Validators.minLength(3)]] 
        
        /* deviceInfo: this.formBuilder.group({
            deviceId:["123412341234"],
          deviceType:["DEVICE_TYPE_ANDROID"],
             notificationToken:["12341234werewrtw1234"] })*/
            })
      
    //Mirouter router aca inyectamos en el constructor el router para que despues que hagamos clik en el router
    // en login y el token sea valido pueda ingresar a home 


   }

  ngOnInit(): void {
    console.log("TOKEN OBTENIDO DE SERVICIO"+this.UserSer.getTokenService());
  }

  
  //este metodo se usaba cunado el login usaba cookies pero ahora que es jwt ignorar este metodo.
  login() {
    const user={email:this.email,password:this.password};
    console.log(this.email);
    console.log(this.password);
    this.UserSer.LoginServi(user).subscribe(
    data=>{
    console.log(data);
    this.UserSer.setTokenService(data.token); //seteo el token.
    this.MiRouter.navigateByUrl("portfolio");
    },
    error => {
      console.log(error); //conesto vemos los errores
    }); //obtenemos el token que nos da el servicicio
    //que apunta a la api.
    /*******************************
     *  meter el email **eve.holt@reqres.in y la contraeña que quieras
     */
  }


onEnviar(event:Event){
  event.preventDefault; //es canceclar el curso normal del submit
  this.autenticacion.IniciarSesion(this.form.value).subscribe(data=>{
    console.log("Data"+ JSON.stringify(data));
    this.MiRouter.navigateByUrl("portfolio");

  });
}



get Username(){

  return this.form.get('username');
}



get Password(){

  return this.form.get('password');
}

muestraHelp(){
this.help=!this.help;
console.log("variable help"+this.help);
}
}
