import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Subject,Observable, of } from 'rxjs';
import {ARCH}  from 'src/app/ARCH';
const httpOptions={
  headers : new HttpHeaders({
    'Content-type': 'application/json'  })
                  }


@Injectable({
  providedIn: 'root'
})
export class SubirimgService {
  private subject=new Subject<any>(); //para escuchar evento del template 
  private APIuri ='http://localhost:3000/Imagen'

  constructor(private http: HttpClient) { } 


   UploadImg(ENTRADA:ARCH): Observable<ARCH> {
      return this.http.post<ARCH>(this.APIuri,ENTRADA,httpOptions);

  }
   GetUpload(): Observable<ARCH[]> {
    return this.http.get<ARCH[]>(this.APIuri);

   }

}
