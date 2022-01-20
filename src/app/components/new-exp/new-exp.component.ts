import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Experiencias } from 'src/app/mock-experience';
import { EXPE } from 'src/app/Experience';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent implements OnInit {
   @Output() InExp:EXPE[]=[]
   id?:number=0;
    trabajo:string="";
    empresa:string="";
    FechaIni:number=0;
    FechaFin:number=0;
    deltaanio:string="";
    Localidad:string="";
    Provincias:string="";
    Pais:string="";
    UriImg:string="";
    fechastr:string="";
    fechastr1:string="";
    year1:string="";
    year:string="";
    valor:string[]=[];
    valor1:string[]=[];
    anio:number=0;
    anio1:number=0;
  constructor() { }

  ngOnInit(): void {
    
  }

  enviaExp(){
    this.valor = this.fechastr.split('-');
    this.valor1 = this.fechastr1.split('-');
    this.anio= Number(this.valor[0]);
    this.anio1= Number(this.valor1[0]);
    console.log(this.valor[0])
    console.log(this.valor1[0])
    console.log(this.anio1- this.anio);
  }

}

/**
 *     

 * 
 */

