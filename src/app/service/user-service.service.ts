import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Subject,Observable, of, map } from 'rxjs';// permite que sea un servicio asincronico porque sin esto es sincronico 
import{ CookieService } from "ngx-cookie-service";
import { USER} from 'src/app/USER';
import { Users } from 'src/app/mock-user';
import { RSOCi } from '../RSOCI';
const httpOptions={
  headers : new HttpHeaders({
    'Content-type': 'application/json'  })};




@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private uriApi="http://localhost:8080/userp/traertodo";
  private APIuriPut="http://localhost:8080/userp/editar";
  private APIRSOCIput="http://localhost:8080/redsoc/editar";
  private APIRSOCget="http://localhost:8080/redsoc/traertodo";
//vamos a crear una nueva tabla de redes sociales y por  lo tanto nuevos endpoint paara implementarlos com, se sale de la estructura planteada
//pero es la forma mas facil de implementarlo a estas alturas.
  constructor(private http:HttpClient) { }

  GetRsociService():Observable<RSOCi[]> {
    console.log("Se ejecuta GetUserService():Observable<USER[]>");
    return this.http.get<RSOCi[]>(this.APIRSOCget);}
  
    PutRsociServi(entrada:RSOCi):Observable<RSOCi> {
      console.log("entramos en el servcio PutExpServi y el  id es: ");
        console.log(entrada.id)
      const url= `${this.APIRSOCIput}/${1}`
      
     return this.http.put<RSOCi>(url,entrada);
    

    }




  GetUserService():Observable<USER[]> {
    console.log("Se ejecuta GetUserService():Observable<USER[]>");
    return this.http.get<USER[]>(this.uriApi).pipe(map(user => {
        
      user.forEach(element => {
        if (element.email==undefined) {element.email="";}  
        if (element.apellido==undefined) {element.apellido="";}  
      });
      
      
      
      return user;
    
    })); }
    
    PutUserServi(entrada:USER):Observable<USER> {
      console.log("entramos en el servcio PutExpServi y el  id es: ");
        console.log(entrada.id)
      const url= `${this.APIuriPut}/${entrada.id}`
      
     return this.http.put<USER>(url,entrada);
    

    }
    




}
