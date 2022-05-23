import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private readonly autor:AutenticacionService
  ) {}


intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //traemos el behavior subject
 var currentuser=this.autor.UsuarioAutenticado;
 
//console.log("tokenheaderinterceptor1: "+currentuser.token);
if(currentuser&&currentuser.token){
  //console.log("entramos al if de interceptor");
req=req.clone({
setHeaders:{
  Authorization:currentuser.token}})
}


//console.log('Before sending data');
//console.log('Request : ', req);  console.log('Before sending data');

//console.log('token: ' + req.headers.get('token'));

//console.log("interceptor corrinedo"+JSON.stringify(currentuser));
return next.handle(req);

}

  
}
