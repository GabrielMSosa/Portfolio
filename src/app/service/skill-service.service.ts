import { Injectable } from '@angular/core';
import {SKILL} from "src/app/SKILL";
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

  constructor(private http:HttpClient) { }

GetSkillService():Observable<SKILL[]> {
console.log("Se ejecuta GetSkillService():Observable<Skill>");
return this.http.get<SKILL[]>(this.APIurl);


}



}
