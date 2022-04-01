import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Subject,Observable, of } from 'rxjs';// permite que sea un servicio asincronico porque sin esto es sincronico 
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
  private uriApi="http://localhost:3000/Users"
  constructor(private http:HttpClient) { }

  GetUserService():Observable<USER[]> {
    console.log("Se ejecuta GetUserService():Observable<USER[]>");
    return this.http.get<USER[]>(this.uriApi);}
    

}
