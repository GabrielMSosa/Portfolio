import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/service/loginservice.service';
import {Router} from "@angular/router";
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  form:FormGroup;
//  email: string="";
//  password: string="";

  constructor(private formBuilder:FormBuilder,private UserSer:LoginserviceService, public MiRouter : Router) {
    //Mirouter router aca inyectamos en el constructor el router para que despues que hagamos clik en el router
    // en login y el token sea valido pueda ingresar a home 
    //vamos a ainiciar el formulario con el servicio de formbuilder 
 
    this.form=this.formBuilder.group(
      //vamosa especificarel form control;
      {
        //tenemos que hacer que el grop se igual al que vamos a enviar a nuestra API.
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]]
        //aca va el resto de las validaciones que vamos a enviar a nuestra api 
        //para que nos devuelva el jwt token


      }


    )

   }

  ngOnInit(): void {
   // console.log("TOKEN OBTENIDO DE SERVICIO"+this.UserSer.getTokenService());
  }

  

  login() {
    //7const user={email:this.email,password:this.password};
    //console.log(this.email);
  //  console.log(this.password);
//    this.UserSer.LoginServi(user).subscribe(
 //   data=>{
  //  console.log(data);
   // this.UserSer.setTokenService(data.token); //seteo el token.
   // this.MiRouter.navigateByUrl("/");
   // },
  //  error => {
   //   console.log(error); //conesto vemos los errores
   // }); //obtenemos el token que nos da el servicicio
    //que apunta a la api.
    /*******************************
     *  meter el email **eve.holt@reqres.in y la contraeña que quieras
     */
  }

get  Email() {

  return this.form.get('email');

}

get Password() {
  return this.form.get('password');
}

onEnviar(event:Event){
//
  //event.preventDefault;//cancelar el evento normal
  //this.UserSer.IniciarSesion(this.form.value).subscribe(data=>{
   // console.log("DATA",JSON.stringify(data));
  //  this.MiRouter.navigate(['/portfolio'])
 // })
//vamos a dejar comentado ya que no implemente mi jwt aun 

this.UserSer.setTokenService("data.token"); //seteo el token.

this.MiRouter.navigate(['/portfolio']);

}


}
