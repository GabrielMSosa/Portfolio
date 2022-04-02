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
private APIurlget="http://localhost:8080/skill/traertodo";
private APIurlpost="http://localhost:8080/skill";
private APIurldelete="http://localhost:8080/skill/borrar";
private APIurlput="http://localhost:8080/skill/editar";


private APIurl1post="http://localhost:8080/idioma";
private APIurl1get="http://localhost:8080/idioma/traertodo";
private APIurl1delete="http://localhost:8080/idioma/borrar";
private APIurl1put="http://localhost:8080/idioma/editar"
  constructor(private http:HttpClient) { }

GetSkillService():Observable<SKILL[]> {
console.log("Se ejecuta GetSkillService():Observable<Skill>");
return this.http.get<SKILL[]>(this.APIurlget);

}

PutIdiomaServi(entrada:IDIO):Observable<IDIO>{
const url=`${this.APIurl1put}/${entrada.id}`;
 return this.http.put<IDIO>(url,entrada);
 
}

DeleteSkillServi(entrada:SKILL):Observable<SKILL> {
  const url= `${this.APIurldelete}/${entrada.id}`;
  return this.http.delete<SKILL>(url);

}
DeleteIdioServi(entrada:IDIO):Observable<IDIO> {
  const url= `${this.APIurl1delete}/${entrada.id}`;
  return this.http.delete<IDIO>(url);
}
GetIdiomaService():Observable<IDIO[]>{
  console.log("Se ejecuta GetIdiomaService():Observable<IDIO[]>{");
return this.http.get<IDIO[]>(this.APIurl1get);


}

serviAddIdioma(ENTRADA:IDIO):Observable<IDIO>{
  return this.http.post<IDIO>(this.APIurl1post,ENTRADA,httpOptions);
}
serviAddSkill(ENTRADA:SKILL):Observable<SKILL> {
  return this.http.post<SKILL>(this.APIurlpost,ENTRADA,httpOptions);
}
PutSkillServi(entrada:SKILL):Observable<SKILL> {
  const url=`${this.APIurlput}/${entrada.id}`;
   return this.http.put<SKILL>(url,entrada);
   
  }
  



}
