import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ CookieService } from "ngx-cookie-service";
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient,private cookies: CookieService) { }
LoginServi(user:any):Observable<any> {
  return this.http.post("https://reqres.in/api/login",user);


}

setTokenService(token1:string){
  this.cookies.set("token",token1);


}
getTokenService(){
return this.cookies.get("token");

}



}
