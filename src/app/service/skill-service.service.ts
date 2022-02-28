import { Injectable } from '@angular/core';
import {SKILL} from "src/app/SKILL";
import {IDIO} from "src/app/IDIO";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Subject,Observable } from 'rxjs';
const httpOptions={
  headers : new HttpHeaders({
    'Content-type': 'application/json'  })};



@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {
private subje=new Subject<any>();
private APIurl="http://localhost:5001/Skills"
private APIurl1="http://localhost:5001/Idioma"
  constructor(private http:HttpClient) { }

GetSkillService():Observable<SKILL[]> {
console.log("Se ejecuta GetSkillService():Observable<Skill>");
return this.http.get<SKILL[]>(this.APIurl);

}
DeleteSkillServi(entrada:SKILL):Observable<SKILL> {
  const url= `${this.APIurl}/${entrada.id}`;
  return this.http.delete<SKILL>(url);

}
GetIdiomaService():Observable<IDIO[]>{
  console.log("Se ejecuta GetIdiomaService():Observable<IDIO[]>{");
return this.http.get<IDIO[]>(this.APIurl1);


}

serviAddIdioma(ENTRADA:IDIO):Observable<IDIO>{
  return this.http.post<IDIO>(this.APIurl1,ENTRADA,httpOptions);
}




}
