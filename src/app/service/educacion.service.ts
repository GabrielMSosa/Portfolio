import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Subject,Observable, of } from 'rxjs';// permite que sea un servicio asincronico porque sin esto es sincronico 
//y la idea que el servicio funcione cuando sea necesario no que siempre se ejecute 
import { Educacion } from 'src/app/mock-Educacion';
import { EDU } from 'src/app/Edu';
const httpOptions={
  headers : new HttpHeaders({
    'Content-type': 'application/json'  })
  }

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private showAddTask:boolean=false;
  private subject=new Subject<any>(); //para escuchar evento del template 
  private APIuriget ='https://dry-escarpment-76622.herokuapp.com/educacion/traertodo'
  //private APIuriget ='http://localhost:5000/educacion/traertodo'
  private APIuripost='https://dry-escarpment-76622.herokuapp.com/educacion';
  //private APIuripost='http://localhost:5000/educacion';
  private APIuriput ='https://dry-escarpment-76622.herokuapp.com/educacion/editar';
  //private APIuriput ='http://localhost:5000/educacion/editar';
  private APIuridelete='https://dry-escarpment-76622.herokuapp.com/educacion/borrar';
  //private APIuridelete='http://localhost:5000/educacion/borrar';


  constructor( private http: HttpClient) { }
  
  
  
  
  
  


onToggle():Observable<any> {
  return this.subject.asObservable();
}

getServiceEdus():Observable<EDU[]>{
//console.log("entramos en el servcio getExps");
return this.http.get<EDU[]>(this.APIuriget)
}
serviAddEdu(ENTRADA:EDU):Observable<EDU>{
return this.http.post<EDU>(this.APIuripost,ENTRADA,httpOptions);
}

DeleteServiceEdu(entrada:EDU):Observable<EDU>{
const url= `${this.APIuridelete}/${entrada.id}`
return this.http.delete<EDU>(url);}

PutEduServi(entrada:EDU):Observable<EDU>{
  const url= `${this.APIuriput}/${entrada.id}`;
  return this.http.put<EDU>(url,entrada);}



} 