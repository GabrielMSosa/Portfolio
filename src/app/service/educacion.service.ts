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
  private APIuri ='http://localhost:5001/Educacion'

  constructor( private http: HttpClient) { }



onToggle():Observable<any> {
  return this.subject.asObservable();

}

getServiceEdus():Observable<EDU[]>{
console.log("entramos en el servcio getExps");

return this.http.get<EDU[]>(this.APIuri)
  

}
serviAddEdu(ENTRADA:EDU):Observable<EDU>{
return this.http.post<EDU>(this.APIuri,ENTRADA,httpOptions);
}

DeleteServiceEdu(entrada:EDU):Observable<EDU>{
const url= `${this.APIuri}/${entrada.id}`
return this.http.delete<EDU>(url);}

PutEduServi(entrada:EDU):Observable<EDU>{
  const url= `${this.APIuri}/${entrada.id}`;
  return this.http.put<EDU>(url,entrada);

}



} 