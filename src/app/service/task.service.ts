import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Subject,Observable, of } from 'rxjs';// permite que sea un servicio asincronico porque sin esto es sincronico 
//y la idea que el servicio funcione cuando sea necesario no que siempre se ejecute 
import { Experiencias } from 'src/app/mock-experience';
import { EXPE } from 'src/app/Experience';
import { GlobalConstants } from '../GlobalConstants';

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
  private APIuriget = GlobalConstants.apiURL+'/experiencias/traertodo';
  //private APIuriget ='http://localhost:5000/experiencias/traertodo';
  private APIuriPost= GlobalConstants.apiURL+'/experiencias';
  //private APIuriPost='http://localhost:5000/experiencias';
  private APIuriDelete= GlobalConstants.apiURL+'/experiencias/borrar';
  //private APIuriDelete='http://localhost:5000/experiencias/borrar';
  private APIuriPut= GlobalConstants.apiURL+'/experiencias/editar';
  //private APIuriPut='http://localhost:5000/experiencias/editar';
  EXPBD:EXPE[]=[];
  constructor( private http: HttpClient) { } 


  onToggle():Observable<any> {
    return this.subject.asObservable();

  }

  getExps():Observable<EXPE[]>{
  //console.log("entramos en el servcio getExps");
   

   return  this.http.get<EXPE[]>(this.APIuriget);

    


}
PutExpServi(entrada:EXPE):Observable<EXPE>{
  const url= `${this.APIuriPut}/${entrada.id}`
  //console.log("entramos en el servcio PutExpServi");
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
