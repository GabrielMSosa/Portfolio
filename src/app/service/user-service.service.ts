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
  private uriApi="https://dry-escarpment-76622.herokuapp.com/userp/traertodo";
  //private uriApi="http://localhost:5000/userp/traertodo";
  private APIuriPut="https://dry-escarpment-76622.herokuapp.com/userp/editar";
  //private APIuriPut="http://localhost:5000/userp/editar";
  private APIRSOCIput="https://dry-escarpment-76622.herokuapp.com/redsoc/editar";
  //private APIRSOCIput="http://localhost:5000/redsoc/editar";
  private APIRSOCget="https://dry-escarpment-76622.herokuapp.com/redsoc/traertodo";
  //private APIRSOCget="http://localhost:5000/redsoc/traertodo";
//vamos a crear una nueva tabla de redes sociales y por  lo tanto nuevos endpoint paara implementarlos com, se sale de la estructura planteada
//pero es la forma mas facil de implementarlo a estas alturas.
  constructor(private http:HttpClient) { }

  GetRsociService():Observable<RSOCi[]> {
    //console.log("Se ejecuta GetUserService():Observable<USER[]>");
    return this.http.get<RSOCi[]>(this.APIRSOCget);}
  
    PutRsociServi(entrada:RSOCi):Observable<RSOCi> {
      //console.log("entramos en el servcio PutRed social y el  id es: ");
      //console.log(JSON.stringify(entrada));
    
      //console.log(entrada.id)
      const url= `${this.APIRSOCIput}/${1}`
      
     return this.http.put<RSOCi>(url,entrada);
    

    }




  GetUserService():Observable<USER[]> {
    //console.log("Se ejecuta GetUserService():Observable<USER[]>");
    return this.http.get<USER[]>(this.uriApi); }
    
    PutUserServi(entrada:USER):Observable<USER> {
      //console.log("entramos en el servcio PutExpServi y el  id es: ");
        //console.log(entrada.id)
      const url= `${this.APIuriPut}/${entrada.id}`
      
     return this.http.put<USER>(url,entrada);
    

    }
    




}
