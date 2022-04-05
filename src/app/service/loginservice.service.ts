import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Subject,Observable, of,BehaviorSubject } from 'rxjs';// permite que sea un servicio asincronico porque sin esto es sincronico 
import{ CookieService } from "ngx-cookie-service";
import { USER} from 'src/app/USER';
import { Users } from 'src/app/mock-user';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  flag1 :boolean = false;
  currentSubject:BehaviorSubject<any>;
  tokem:string = '';
  constructor(private http: HttpClient,private cookies: CookieService) { 
      this.currentSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'));



        }
LoginServi(user:any):Observable<any> {
  return this.http.post("https://reqres.in/api/login",user);
}

IniciarSesion(credenciales:any):Observable<any> {
  //el metodo pipe hace para desencadencar instrucciones es decir modifica los datos  si quremos los
  //y despues hace el return   
  //para ccolocar clave valor
  return this.http.post("urlApipost",credenciales).pipe(map(data=>{
    //aca ponemos la info que queremos poner para modificar antes devolver el dato
    //sesion storage es una memoria temporal que dura lo que la pestaña estee abierta
    //cuando la cerramos se borra es una cookies
    sessionStorage.setItem('currentUser',JSON.stringify(data));


    return data;

  }));


}



setTokenService(token1:string){
  this.cookies.set("token",token1);


}
getTokenService(){

this.tokem=this.cookies.get("token");
return this.tokem;
}

logout() {
  this.cookies.set("token","");
}

public get logIn(): boolean {
   
  return ((this.cookies.get("token") !== "") || (this.cookies.get("token") !== null))


 // return (this.cookies.get("token") !== null);//validacion pobre porque si de 
  //alguna manera ponen una cookie cualquiera este servicio lo va a tomar bien y van 
  //a tener permiso todo el mundo pero para un inicio vamos hacer que funcione.
}


 get UsuarioAutenticado()
 {

 if(this.currentSubject.value!=undefined) {
return this.currentSubject.value;}
else {
  return "{}";
}

}


}


