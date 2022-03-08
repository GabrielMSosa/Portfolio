import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Educacion } from 'src/app/mock-Educacion';
import { EDU } from 'src/app/Edu';
import { EducacionService } from 'src/app/service/educacion.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css']
})
export class AddEduComponent implements OnInit {

  @Output() InExp:EventEmitter<EDU>=new EventEmitter(); 
   id?:number=0;
   estadox:string[]=["Graduado","Cursando"];
   seleccion:string="";
   Institucion:string=""; 
   Titulo:string="";
   FechaIni:number=0;
   FechaFin:number=0;
   Estado:string="";
   UriImg:string="";
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
//----------------------------------------------------------------
@Input() flagedit:boolean = false;
    linkaux:string []=[ "https://drive.google.com/uc?id=","&export=download"];
    @Output() newEditItem:EventEmitter<boolean> = new EventEmitter(false);
    @Input() newitem:boolean = false;
     
    @Input() datoedit:EDU ={
      Institucion:"", 
      Titulo:"",
      FechaIni:0,
      FechaFin:0,
      Estado:"",
      UriImg:""  
    };
    UriImge:string = "";

    constructor() { }

  ngOnInit(): void {
    


  }
  onChange(){
    //console.log(this.seleccion)
    this.Estado=this.seleccion.toString();
    console.log(this.Estado)
  }


  enviaEdu(){
    this.UriImg=this.linkaux[0]+this.UriImge+this.linkaux[1]
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
  if(this.Institucion.length===0){
    this.error=true;
    this.mensaje+= "-Ingrese el campo de Institucion \n";  }
  if(this.Titulo.length===0){
      this.error=true;
      this.mensaje+= "-Ingrese el campo de Titulo \n";  }
    
    if(this.fechastr.length===0){
        this.error=true;
        this.mensaje+= "-Ingrese el campo de la Fecha de inicio \n";  }
      
     
      if(this.fechastr1.length===0){
          this.error=true;
          this.mensaje+= "-Ingrese el campo de la Fecha de Fin \n";  }
  
      if(this.Estado.length===0){
            this.error=true;
            this.mensaje+= "-Ingrese el campo de Estado \n";  }
      
                      
            if(this.error==true&&this.flagedit==false){
              alert(this.mensaje)
              this.mensaje="";
            }
    
            if (this.error==false){
              if(this.flagedit==true){
                this.datoedit.Institucion=this.Institucion;
                this.datoedit.Titulo=this.Titulo;
                this.datoedit.FechaIni=this.FechaIni;
                this.datoedit.FechaFin=this.FechaFin;
                this.datoedit.Estado=this.Estado;
                this.datoedit.UriImg=this.UriImg;
                this.newEditItem.emit(true);
                this.InExp.emit(this.datoedit);  
                
                
                
                
                
                
                



              }
      
          else{
          const {Institucion,Titulo,FechaIni,FechaFin,Estado,UriImg}=this;
          const NewEXPE= {Institucion,Titulo,FechaIni,FechaFin,Estado,UriImg};
          console.log(NewEXPE);
          this.InExp.emit(NewEXPE);
          this.newitem=true;
              }
            }

}}

