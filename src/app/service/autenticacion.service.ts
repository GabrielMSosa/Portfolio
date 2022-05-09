import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { BehaviorSubject,Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//behavioer es un observable que tiene nocion de eestado siempre vamos a poder acceder al ultimo de
@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
url="https://dry-escarpment-76622.herokuapp.com/user/loginUser"
currentUserObject:BehaviorSubject<any>;

  constructor(private http: HttpClient,private httpBackend: HttpBackend) { 
    console.log("serviauto");
    this.currentUserObject= new BehaviorSubject<any>(
        JSON.parse(sessionStorage.getItem('currentUser')||'{}')

    );

  }

  IniciarSesion(credenciales:any):Observable<any> {
    console.log(JSON.stringify(credenciales));
    const newhttp= new HttpClient(this.httpBackend);
    return newhttp.post(this.url,credenciales).pipe(map(data=>{
          sessionStorage.setItem('currentUser',JSON.stringify( data))
            this.currentUserObject.next(data);
            return data;

        } ))


  }

get UsuarioAutenticado(){
  return this.currentUserObject.value;
}

}
