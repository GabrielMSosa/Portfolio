import { Component, Input, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/mock-experience';
import { EXPE } from 'src/app/Experience';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-item-exp',
  templateUrl: './item-exp.component.html',
  styleUrls: ['./item-exp.component.css']
})
export class ItemExpComponent implements OnInit {
  @Input() experiencias:EXPE = Experiencias[0];
  @Input() newitem:boolean = false;
  Imagen:string ="";


  constructor(
    
  ) { }

  ngOnInit(): void {
   
  }


  BorrarExperiencia(entrada:EXPE){
    console.log(this.experiencias.id);


  }

  EditarExperiencia(entrada:EXPE){
    this.newitem=true;
  }




}