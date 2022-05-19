
import { FormsModule,Validators,FormGroup,FormBuilder, AbstractControl } from '@angular/forms';
import { USER } from 'src/app/USER';
import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { RSOCi } from 'src/app/RSOCI';
import { UserServiceService } from 'src/app/service/user-service.service';
/*export interface USER{
    id?:number;
    nombre:['',[Validators.required,Validators.minLength(9)]],
    apellido:['',[Validators.required,Validators.minLength(9)]],
    telefono:['',[Validators.required,Validators.minLength(9)]],
    email:['',[Validators.required,Validators.minLength(9)]],
    edad:['',[Validators.required,Validators.minLength(9)]],
    acercademi:['',[Validators.required,Validators.minLength(9)]],
    urlImg:['',[Validators.required,Validators.minLength(9)]],
    }

*/
@Component({
  selector: 'app-btn-edit-lapiz',
  templateUrl: './btn-edit-lapiz.component.html',
  styleUrls: ['./btn-edit-lapiz.component.css']
})
export class BtnEditLapizComponent implements OnInit {
  flagedit1:boolean = false;
  @Output() InExp:EventEmitter<USER>=new EventEmitter(); 
   @Input() flagedit:boolean = false;
  @Output() newEditItem:EventEmitter<boolean> = new EventEmitter(false);
  @Input() datoedit:USER ={
        nombre:"",
        apellido:"",
        telefono:"",
        email:"",
        edad:"",
        acercademi:"",
        urlImg:""
  };

  SOCIBD:RSOCi[]=[];
 datoRsoci:RSOCi={
  linkGit:"",
  linkLn:"",
  linkFace:"",
  linkTwit:""
 }

  form:FormGroup;
  constructor(private formBuilder: FormBuilder,private servi:UserServiceService) {
    this.form=this.formBuilder.group({
      nombre:['',[Validators.required,Validators.minLength(3)]],
      apellido:['',[Validators.required,Validators.minLength(3)]],
      telefono:['',[Validators.required,Validators.minLength(9)]],
      email:['',[Validators.required,Validators.minLength(9)]],
      edad:['',[Validators.required,Validators.minLength(2)]],
      acercademi:['',[Validators.required,Validators.minLength(30)]],
      urlImg:['',[Validators.required,Validators.minLength(13)]],
      linkGit:['',[Validators.required,Validators.minLength(4),ValidateLinkGit]],
      linkLn:['',[Validators.required,Validators.minLength(4),ValidateLinkLinkedin]],
      linkFace:['',[Validators.required,Validators.minLength(4),ValidateLinkface]],
      linkTwit:['',[Validators.required,Validators.minLength(4),ValidateLinkTwiter]]
    })}


  ngOnInit(): void {
  }
  get Nombre(){
    return this.form.get('nombre');
  }
  get Apellido(){
    return this.form.get('apellido');
  }
  get Telefono(){
    return this.form.get('telefono');
  }
  get Email(){
    return this.form.get('email');
  }
  get Edad(){
    return this.form.get('edad');
  }
  get Acercademi(){
    return this.form.get('acercademi');
  }
  get UrlImg(){
    return this.form.get('urlImg');
  }
  get LinkGit(){
    return this.form.get('linkGit');
  }
  get LinkLn(){
    return this.form.get('linkLn');
  }
  get LinkFace(){
    return this.form.get('linkFace');
  }
  get LinkTwit(){
    return this.form.get('linkTwit');
  }
  gituberror:boolean = false;
  linkaux:string []=[ "https://drive.google.com/uc?id=","&export=download"];
  token1:string="";
  iniciot:number=0;
  fint:number=0;

  patron:string="/view";
  uritotal:string=""; 
  

  enviaUser(){
  this.uritotal=this.form.value.urlImg;

  this.fint=this.uritotal.indexOf(this.patron);
  this.iniciot=this.fint-33;
  this.token1=this.uritotal.substring(this.iniciot, this.fint);
  console.log(this.token1);

  this.datoRsoci.linkFace=this.form.value.linkFace;
  this.datoRsoci.linkGit=this.form.value.linkGit;
  this.datoRsoci.linkLn=this.form.value.linkLn;
  this.datoRsoci.linkTwit=this.form.value.linkTw;
  
if(this.datoRsoci.linkFace=="none"){
this.datoRsoci.linkFace="https://portfolio2-a6e86.web.app/portfolio";
console.log("el valor del link de linkFace vale :"+this.datoRsoci.linkFace);
} 
if(this.datoRsoci.linkGit=="none"){
this.datoRsoci.linkGit="https://portfolio2-a6e86.web.app/portfolio";
console.log("el valor del link de linkGit vale :"+this.datoRsoci.linkGit);
}
if(this.datoRsoci.linkLn=="none"){
this.datoRsoci.linkLn="https://portfolio2-a6e86.web.app/portfolio";
console.log("el valor del link de linkLn vale :"+this.datoRsoci.linkLn);
}
if(this.datoRsoci.linkTwit=="none"){
this.datoRsoci.linkTwit="https://portfolio2-a6e86.web.app/portfolio";
console.log("el valor del link de linkTwit vale :"+this.datoRsoci.linkTwit);
}
  console.log("nuestro json de redes sociales vale:")
  
  
  this.servi.PutRsociServi(this.datoRsoci).subscribe(()=>{
    this.SOCIBD=this.SOCIBD.filter(t=>t.id!==this.datoRsoci.id);
    console.log("entramos alput despues de =>");
    console.log(JSON.stringify(this.datoRsoci))    
  
  });




  
  //================================================
  this.datoedit.telefono=this.form.value.telefono;
  this.datoedit.urlImg=this.linkaux[0]+this.token1+this.linkaux[1];
  this.datoedit.nombre=this.form.value.nombre;
  this.datoedit.apellido=this.form.value.apellido;
  this.datoedit.edad=this.form.value.edad;
  this.datoedit.email=this.form.value.email;
  this.datoedit.acercademi=this.form.value.acercademi;
  //aca tenemos que agregar despues las redes sociales.
  console.log("Inexp de user vale: ");
 console.log(JSON.stringify(this.datoedit));  
  this.newEditItem.emit(true);
  this.InExp.emit(this.datoedit);  

  }
}

//AGREGAMOS VALIDATORS PERSONALIZADOS PARA DETECTAR LOS INPUTS QUE NO SEAN LINKS DE REDES SOCIALES.

function ValidateLinkGit(control: AbstractControl): {[key: string]: any} | null  {
  
  if (control.value && !control.value.includes("https://github.com")) {
      if (!control.value.includes("none")){
        return { 'LinkgitInvalid': true };}
    
  }
  return null;
  
}

function ValidateLinkface(control: AbstractControl): {[key: string]: any} | null  {
  
  if (control.value && !control.value.includes("https://www.facebook.com")) {
      if (!control.value.includes("none")){
        return { 'LinkFaceInvalid': true };}
    
  }
  return null;
  
}
function ValidateLinkLinkedin(control: AbstractControl): {[key: string]: any} | null  {
  
  if (control.value && !control.value.includes("https://www.linkedin.com")) {
      if (!control.value.includes("none")){
        return { 'LinkLinkedinInvalid': true };}
    
  }
  return null;
  
}

function ValidateLinkTwiter(control: AbstractControl): {[key: string]: any} | null  {
  
  if (control.value && !control.value.includes("https://www.twitter.com")) {
      if (!control.value.includes("none")){
        return { 'LinkTwitterInvalid': true };}
    
  }
  return null;
  
}
