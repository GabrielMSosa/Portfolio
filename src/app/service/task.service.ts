import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Subject,Observable, of } from 'rxjs';// permite que sea un servicio asincronico porque sin esto es sincronico 
//y la idea que el servicio funcione cuando sea necesario no que siempre se ejecute 
import { Experiencias } from 'src/app/mock-experience';
import { EXPE } from 'src/app/Experience';

const httpOptions={
  headers : new HttpHeaders({
    'Content-type': 'application/json'  })
                  }


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private showAddTask:boolean=false;
  private subject=new Subject<any>(); //para escuchar evento del template 
  private APIuriget ='https://dry-escarpment-76622.herokuapp.com/experiencias/traertodo';
  private APIuriPost='https://dry-escarpment-76622.herokuapp.com/experiencias';
  private APIuriDelete='https://dry-escarpment-76622.herokuapp.com/experiencias/borrar';
  private APIuriPut='https://dry-escarpment-76622.herokuapp.com/experiencias/editar';
  EXPBD:EXPE[]=[];
  constructor( private http: HttpClient) { } 


  onToggle():Observable<any> {
    return this.subject.asObservable();

  }

  getExps():Observable<EXPE[]>{
  console.log("entramos en el servcio getExps");
   

   return  this.http.get<EXPE[]>(this.APIuriget);

    


}
PutExpServi(entrada:EXPE):Observable<EXPE>{
  const url= `${this.APIuriPut}/${entrada.id}`
  console.log("entramos en el servcio PutExpServi");
 return this.http.put<EXPE>(url,entrada);

}

serviAddExp(ENTRADA:EXPE):Observable<EXPE>{
  return this.http.post<EXPE>(this.APIuriPost,ENTRADA,httpOptions);
}

DeleteServiceExp(entrada:EXPE):Observable<EXPE>{
  const url= `${this.APIuriDelete}/${entrada.id}`
  return this.http.delete<EXPE>(url);



}



}
