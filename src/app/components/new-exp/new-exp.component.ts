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
   @Output() InExp:EventEmitter<EXPE>=new EventEmitter(); 
   id?:number=0;
    trabajo:string="";
    empresa:string="";
    FechaIni:number=0;
    FechaFin:number=0;
    deltaanio:string="";
    Localidad:string=""
    Provincias:string="";
    Pais:string="";
    UriImg:string="faltaconfigurar";
    fechastr:string="";
    fechastr1:string="";
    year1:string="";
    year:string="";
    valor:string[]=[];
    valor1:string[]=[];
    anio:number=0;
    anio1:number=0;
    mensaje:string="";
    error:boolean=false;


    constructor() { }

  ngOnInit(): void {
    
  }

  enviaExp(){
    this.valor = this.fechastr.split('-');
    this.valor1 = this.fechastr1.split('-');
    this.FechaIni= Number(this.valor[0]); //casting de string a number
    this.FechaFin = Number(this.valor1[0]);
    

    if(this.FechaFin<this.FechaIni){
      this.error=true;
      this.mensaje+= "-La fecha de Fin no puede ser menor que la de inicio \n"; 

    }



    console.log(this.anio.toString());//casting de number a string 
    console.log(this.valor[0])
    console.log(this.valor1[0])
    console.log(this.anio1- this.anio);
    // vamos a validar que ningun campo estee vacio
  if(this.trabajo.length===0){
    this.error=true;
    this.mensaje+= "-Ingrese el campo de trabajo \n";  }
  if(this.empresa.length===0){
      this.error=true;
      this.mensaje+= "-Ingrese el campo de empresa \n";  }
    
    if(this.fechastr.length===0){
        this.error=true;
        this.mensaje+= "-Ingrese el campo de la Fecha de inicio \n";  }
      
     
      if(this.fechastr1.length===0){
          this.error=true;
          this.mensaje+= "-Ingrese el campo de la Fecha de Fin \n";  }
  
      if(this.Localidad.length===0){
            this.error=true;
            this.mensaje+= "-Ingrese el campo de Localidad \n";  }
      if(this.Provincias.length===0){
              this.error=true;
              this.mensaje+= "-Ingrese el campo de Provincias \n";  }
      if(this.Pais.length===0){
              this.error=true;
              this.mensaje+= "-Ingrese el campo de Pais \n";  }
              
        if(this.error==true){
          alert(this.mensaje)
          this.mensaje="";
        }

        if (this.error==false){
          this.deltaanio=(this.FechaFin - this.FechaIni).toString();
          const {trabajo,empresa,FechaIni,FechaFin,deltaanio,Localidad,Provincias,Pais,UriImg}=this;
          const NewEXPE= {trabajo,empresa,FechaIni,FechaFin,deltaanio,Localidad,Provincias,Pais,UriImg};
          console.log(NewEXPE);
          this.InExp.emit(NewEXPE);

        }


  }

}

/**
 *         id?:number,
    trabajo:string, 
    empresa:string,
    FechaIni:number,
    FechaFin:number,
    deltaanio:string,
    Localidad:string,
    Provincias:string,
    Pais:string,
    UriImg:string


 * 
 */

