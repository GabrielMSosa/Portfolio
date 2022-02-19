import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subject,Observable, of } from 'rxjs';// permite que sea un servicio asincronico porque sin esto es sincronico 
import{ CookieService } from "ngx-cookie-service";
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  flag1 :boolean = false;
  tokem:string = '';
  constructor(private http: HttpClient,private cookies: CookieService) { }
LoginServi(user:any):Observable<any> {
  return this.http.post("https://reqres.in/api/login",user);


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

}
