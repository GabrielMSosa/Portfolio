import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Subject,Observable, of, map } from 'rxjs';// permite que sea un servicio asincronico porque sin esto es sincronico 
import{ CookieService } from "ngx-cookie-service";
import { USER} from 'src/app/USER';
import { Users } from 'src/app/mock-user';

const httpOptions={
  headers : new HttpHeaders({
    'Content-type': 'application/json'  })};




@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private uriApi="http://localhost:8080/userp/traertodo";
  private APIuriPut="http://localhost:8080/userp/editar";
  constructor(private http:HttpClient) { }

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
