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
private APIurlget="https://dry-escarpment-76622.herokuapp.com/skill/traertodo";
//private APIurlget="http://localhost:5000/skill/traertodo";
private APIurlpost="https://dry-escarpment-76622.herokuapp.com/skill";
//private APIurlpost="http://localhost:5000/skill";
private APIurldelete="https://dry-escarpment-76622.herokuapp.com/skill/borrar";
//private APIurldelete="http://localhost:5000/skill/borrar";
private APIurlput="https://dry-escarpment-76622.herokuapp.com/skill/editar";
//private APIurlput="http://localhost:5000/skill/editar";
//
//
private APIurl1post="https://dry-escarpment-76622.herokuapp.com/idioma";
//private APIurl1post="http://localhost:5000/idioma";
private APIurl1get="https://dry-escarpment-76622.herokuapp.com/idioma/traertodo";
//private APIurl1get="http://localhost:5000/idioma/traertodo";
private APIurl1delete="https://dry-escarpment-76622.herokuapp.com/idioma/borrar";
//private APIurl1delete="http://localhost:5000/idioma/borrar";
private APIurl1put="https://dry-escarpment-76622.herokuapp.com/idioma/editar"
//private APIurl1put="http://localhost:5000/idioma/editar"
  constructor(private http:HttpClient) { }

GetSkillService():Observable<SKILL[]> {
//console.log("Se ejecuta GetSkillService():Observable<Skill>");
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
  //console.log("Se ejecuta GetIdiomaService():Observable<IDIO[]>{");
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
