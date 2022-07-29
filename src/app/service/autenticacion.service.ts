import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { BehaviorSubject,Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalConstants } from '../GlobalConstants';
//behavioer es un observable que tiene nocion de eestado siempre vamos a poder acceder al ultimo de
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
url:string=GlobalConstants.apiURL+"/user/loginUser";
//url="http://localhost:5000/user/loginUser"
currentUserObject:BehaviorSubject<any>;



  constructor(private http: HttpClient,private httpBackend: HttpBackend) { 
    //console.log("serviauto");
    this.currentUserObject= new BehaviorSubject<any>(
        JSON.parse(sessionStorage.getItem('currentUser')||'{}')

    );

  }




  IniciarSesion(credenciales:any):Observable<any> {
    //console.log(JSON.stringify(credenciales));
    console.log(this.url);
    const newhttp= new HttpClient(this.httpBackend);
    return newhttp.post(this.url,credenciales).pipe(map(data=>{
          sessionStorage.setItem('currentUser',JSON.stringify( data))
            this.currentUserObject.next(data);
            return data;

        } ))


  }

  cerrarCesion(){
    sessionStorage.clear();
    
  }


get UsuarioAutenticado(){
  return this.currentUserObject.value;
}

}
