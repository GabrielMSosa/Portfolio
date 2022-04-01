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
    fechaIni:number=0;
    fechaFin:number=0;
    deltaanio:string="";
    localidad:string=""
    provincias:string="";
    pais:string="";
    uriImge:string="";
    uriImg:string="";
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
    @Input() flagedit:boolean = false;
    linkaux:string []=[ "https://drive.google.com/uc?id=","&export=download"];
    @Output() newEditItem:EventEmitter<boolean> = new EventEmitter(false);
    @Input() newitem:boolean = false;
    
    @Input() datoedit:EXPE ={
      trabajo:"", 
      empresa:"",
      fechaIni:0,
      fechaFin:0,
      deltaanio:"",
      localidad:"",
      provincias:"",
      pais:"",
      uriImg:""
     };

     

  



    constructor() { }

  ngOnInit(): void {
    
  }

  enviaExp(){

    this.uriImg=this.linkaux[0]+this.uriImge+this.linkaux[1]
    this.valor = this.fechastr.split('-');
    this.valor1 = this.fechastr1.split('-');
    this.fechaIni= Number(this.valor[0]); //casting de string a number
    this.fechaFin = Number(this.valor1[0]);
    

    if(this.fechaFin<this.fechaIni){
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
  
      if(this.localidad.length===0){
            this.error=true;
            this.mensaje+= "-Ingrese el campo de Localidad \n";  }
      if(this.provincias.length===0){
              this.error=true;
              this.mensaje+= "-Ingrese el campo de Provincias \n";  }
      if(this.pais.length===0){
              this.error=true;
              this.mensaje+= "-Ingrese el campo de Pais \n";  }
              
        if(this.error==true&&this.flagedit==false){
          alert(this.mensaje)
          this.mensaje="";
        }

        if (this.error==false){
          
  if(this.flagedit==true){
    this.deltaanio=(this.fechaFin - this.fechaIni).toString();
          const {trabajo,empresa,fechaIni,fechaFin,deltaanio,localidad,provincias,pais,uriImg}=this;
      
    this.datoedit.trabajo=this.trabajo;
    this.datoedit.empresa=this.empresa;
    this.datoedit.fechaIni=this.fechaIni;
    this.datoedit.fechaFin=this.fechaFin;
    this.datoedit.deltaanio=this.deltaanio;
    this.datoedit.localidad=this.localidad;
    this.datoedit.provincias=this.provincias;
    this.datoedit.pais=this.pais;
    this.datoedit.uriImg=this.uriImg;
    this.newEditItem.emit(true);
    this.InExp.emit(this.datoedit);  
  
  }
  
  else{  
    this.deltaanio=(this.fechaFin - this.fechaIni).toString();
    const {trabajo,empresa,fechaIni,fechaFin,deltaanio,localidad,provincias,pais,uriImg}=this;
    const NewEXPE= {trabajo,empresa,fechaIni,fechaFin,deltaanio,localidad,provincias,pais,uriImg};
    console.log(NewEXPE);
    this.InExp.emit(NewEXPE);
  this.newitem=true;
   }
  





        

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

