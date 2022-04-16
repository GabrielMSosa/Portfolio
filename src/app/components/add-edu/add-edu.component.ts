import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Educacion } from 'src/app/mock-Educacion';
import { EDU } from 'src/app/Edu';
import { EducacionService } from 'src/app/service/educacion.service';
import { FormsModule,Validators,FormGroup,FormBuilder } from '@angular/forms';

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
   email:string="";
   password:string="";

   form:FormGroup;

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

    constructor( private formBuilder: FormBuilder) 
    {this.form=this.formBuilder.group({
      institucion:['',[Validators.required,Validators.minLength(9)]],
      titulo:['',[Validators.required,Validators.minLength(9)]],
      fechastr1:['',[Validators.required,Validators.minLength(4)]],
      fechastr :['',[Validators.required,Validators.minLength(4)]],
      estado:['',Validators.required],
      uriImg:['',[Validators.required,Validators.minLength(32)]]  
    })
      
      /* deviceInfo: this.formBuilder.group({
          deviceId:["123412341234"],
        deviceType:["DEVICE_TYPE_ANDROID"],
           notificationToken:["12341234werewrtw1234"] })*/
          




     }

  ngOnInit(): void {
    


  }
  onChange(){
    //console.log(this.seleccion)
    this.estado=this.seleccion.toString();
    console.log(this.estado)
  }

  token1:string="";
  iniciot:number=0;
  fint:number=0;

  patron:string="/view";
  uritotal:string=""; 
  urlT:string="";
    enviaEdu(){
    this.uritotal=this.form.value.uriImg;

    this.fint=this.uritotal.indexOf(this.patron);
    this.iniciot=this.fint-33;
    this.token1=this.uritotal.substring(this.iniciot, this.fint);
    console.log(this.token1);
    
    this.uriImg=this.linkaux[0]+this.token1+this.linkaux[1];
    console.log(this.uriImg);

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
              
*/
            this.error=false;
            
            if (this.error==false){
              if(this.flagedit==true){
                this.datoedit.institucion=this.form.value.institucion;
                this.datoedit.titulo=this.form.value.titulo;
                this.datoedit.fechaIni=this.fechaIni;
                this.datoedit.fechaFin=this.fechaFin;
                this.datoedit.estado=this.form.value.estado;
                this.datoedit.uriImg=this.uriImg;
                this.newEditItem.emit(true);
                this.InExp.emit(this.datoedit);  
              }
      
          else{
          //const {institucion,titulo,fechaIni,fechaFin,estado,uriImg}=this;
          //const NewEXPE= {institucion,titulo,fechaIni,fechaFin,estado,uriImg};
          this.datoedit.institucion=this.form.value.institucion;
                this.datoedit.titulo=this.form.value.titulo;
                this.datoedit.fechaIni=this.fechaIni;
                this.datoedit.fechaFin=this.fechaFin;
                this.datoedit.estado=this.form.value.estado;
                this.datoedit.uriImg=this.uriImg;
          console.log(this.datoedit);
          this.InExp.emit(this.datoedit);
          this.newitem=true;
              }
            }

}


get Email(){

  return this.form.get('email');
}



get Password(){

  return this.form.get('password');
}

 get Institucion(){
   return this.form.get('institucion');
 }
 get Titulo(){
   return this.form.get('titulo');
 }
 get Fechastr1(){
   return this.form.get('fechastr1');
 }
 get Fechastr(){
   return this.form.get('fechastr');
 }
 get Estado(){
   return this.form.get('estado');
 }
 get UriImg(){
   return this.form.get('uriImg');
 }






}

