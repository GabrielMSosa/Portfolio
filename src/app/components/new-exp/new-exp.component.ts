import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Experiencias } from 'src/app/mock-experience';
import { EXPE } from 'src/app/Experience';
import { TaskService } from 'src/app/service/task.service';
import { FormsModule,Validators,FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})

export class NewExpComponent implements OnInit {
   @Output() InExp:EventEmitter<EXPE>=new EventEmitter(); 
   id?:number=0;
    trabajo:string="";
    form:FormGroup;
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
      deltaanio:"",
      fechaIni:0,
      uriImg:"",
      pais:"",      
      localidad:"",
      provincias:"",
      fechaFin:0
     };

     

  



    constructor(private formBuilder: FormBuilder) 
      {this.form=this.formBuilder.group({
      trabajo:['',[Validators.required,Validators.minLength(4)]],
      empresa:['',[Validators.required,Validators.minLength(4)]],
        
      fechastr1:['',[Validators.required,Validators.minLength(4)]],
      fechastr :['',[Validators.required,Validators.minLength(4)]],
      provincias:['',[Validators.required,Validators.minLength(4)]],
      pais:['',[Validators.required,Validators.minLength(4)]],
      localidad:['',[Validators.required,Validators.minLength(4)]],
      uriImg:['',[Validators.required,Validators.minLength(32)]]  
    })
     }
     



  ngOnInit(): void {
    
  }


  token1:string="";
  iniciot:number=0;
  fint:number=0;

  patron:string="/view";
  uritotal:string=""; 




  enviaExp(){
    this.uritotal=this.form.value.uriImg;

    this.fint=this.uritotal.indexOf(this.patron);
    this.iniciot=this.fint-33;
    this.token1=this.uritotal.substring(this.iniciot, this.fint);
    console.log(this.token1);
    this.uritotal="";
    this.uritotal=this.linkaux[0]+this.token1+this.linkaux[1];
    console.log(this.uritotal);

 
    this.valor = this.form.value.fechastr.split('-');
    this.valor1 = this.form.value.fechastr1.split('-');
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
/*
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
  */        
          this.error=false;
  if(this.flagedit==true){
    this.deltaanio=(this.fechaFin - this.fechaIni).toString();
   //       const {trabajo,empresa,fechaIni,fechaFin,deltaanio,localidad,provincias,pais,uriImg}=this;
      
    this.datoedit.trabajo=this.form.value.trabajo;
    this.datoedit.empresa=this.form.value.empresa;
    this.datoedit.fechaIni=this.fechaIni;
    this.datoedit.fechaFin=this.fechaFin;
    this.datoedit.deltaanio=this.deltaanio;
    this.datoedit.localidad=this.form.value.localidad;
    this.datoedit.provincias=this.form.value.provincias;
    this.datoedit.pais=this.form.value.pais;
    this.datoedit.uriImg=this.uritotal
    this.newEditItem.emit(true);
    this.InExp.emit(this.datoedit);  
  
  }
  
  else{  
    this.deltaanio=(this.fechaFin - this.fechaIni).toString();
    //const {trabajo,empresa,deltaanio,fechaIni,uriImg,pais,localidad,provincias,fechaFin}=this;
    //const NewEXPE= {trabajo,empresa,deltaanio,fechaIni,uriImg,pais,localidad,provincias,fechaFin};
    //console.log(NewEXPE);
    this.datoedit.trabajo=this.form.value.trabajo;
    this.datoedit.empresa=this.form.value.empresa;
    this.datoedit.fechaIni=this.fechaIni;
    this.datoedit.fechaFin=this.fechaFin;
    this.datoedit.deltaanio=this.deltaanio;
    this.datoedit.localidad=this.form.value.localidad;
    this.datoedit.provincias=this.form.value.provincias;
    this.datoedit.pais=this.form.value.pais;
    this.datoedit.uriImg=this.uritotal;
    this.InExp.emit(this.datoedit);
  this.newitem=true;
   }

        }


  





  get Trabajo(){
    return this.form.get('trabajo');
  }
  get Empresa(){
    return this.form.get('empresa');
  }
  get Fechastr(){
    return this.form.get('fechastr');
  }

  get Fechastr1(){
    return this.form.get('fechastr1');
  }
  get Provincias(){
    return this.form.get('provincias');
  }
  get Pais(){
    return this.form.get('pais');
  }

  get Localidad(){
    return this.form.get('Localidad');
  }

  get UriImg(){
    return this.form.get('uriImg');
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

