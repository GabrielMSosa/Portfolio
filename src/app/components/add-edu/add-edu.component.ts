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
   institucion:string=""; 
   titulo:string="";
   fechaIni:number=0;
   fechaFin:number=0;
   estado:string="";
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
//----------------------------------------------------------------
@Input() flagedit:boolean = false;
    linkaux:string []=[ "https://drive.google.com/uc?id=","&export=download"];
    @Output() newEditItem:EventEmitter<boolean> = new EventEmitter(false);
    @Input() newitem:boolean = false;
     
    @Input() datoedit:EDU ={
      institucion:"", 
      titulo:"",
      fechaIni:0,
      fechaFin:0,
      estado:"",
      uriImg:""  
    };
    uriImge:string = "";

    constructor() { }

  ngOnInit(): void {
    


  }
  onChange(){
    //console.log(this.seleccion)
    this.estado=this.seleccion.toString();
    console.log(this.estado)
  }


  enviaEdu(){
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
  if(this.institucion.length===0){
    this.error=true;
    this.mensaje+= "-Ingrese el campo de Institucion \n";  }
  if(this.titulo.length===0){
      this.error=true;
      this.mensaje+= "-Ingrese el campo de Titulo \n";  }
    
    if(this.fechastr.length===0){
        this.error=true;
        this.mensaje+= "-Ingrese el campo de la Fecha de inicio \n";  }
      
     
      if(this.fechastr1.length===0){
          this.error=true;
          this.mensaje+= "-Ingrese el campo de la Fecha de Fin \n";  }
  
      if(this.estado.length===0){
            this.error=true;
            this.mensaje+= "-Ingrese el campo de Estado \n";  }
      
                      
            if(this.error==true&&this.flagedit==false){
              alert(this.mensaje)
              this.mensaje="";
            } 
              

            
            if (this.error==false){
              if(this.flagedit==true){
                this.datoedit.institucion=this.institucion;
                this.datoedit.titulo=this.titulo;
                this.datoedit.fechaIni=this.fechaIni;
                this.datoedit.fechaFin=this.fechaFin;
                this.datoedit.estado=this.estado;
                this.datoedit.uriImg=this.uriImg;
                this.newEditItem.emit(true);
                this.InExp.emit(this.datoedit);  
                
                
                
                
                
                
                



              }
      
          else{
          const {institucion,titulo,fechaIni,fechaFin,estado,uriImg}=this;
          const NewEXPE= {institucion,titulo,fechaIni,fechaFin,estado,uriImg};
          console.log(NewEXPE);
          this.InExp.emit(NewEXPE);
          this.newitem=true;
              }
            }

}}

