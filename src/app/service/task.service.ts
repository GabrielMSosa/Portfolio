import { Injectable } from '@angular/core';
import {Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private showAddTask:boolean=false;
  private subject=new Subject<any>(); //para escuchar evento del template 
  

  constructor() { }


  onToggle():Observable<any> {
    return this.subject.asObservable();

  }

}
