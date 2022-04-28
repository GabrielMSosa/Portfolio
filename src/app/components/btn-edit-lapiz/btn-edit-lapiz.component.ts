
import { FormsModule,Validators,FormGroup,FormBuilder } from '@angular/forms';
import { USER } from 'src/app/USER';
import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';

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
  @Input() datoedit:USER ={
        nombre:"",
        apellido:"",
        telefono:"",
        email:"",
        edad:"",
        acercademi:"",
        urlImg:""
  };

  form:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group({
      nombre:['',[Validators.required,Validators.minLength(6)]],
      apellido:['',[Validators.required,Validators.minLength(6)]],
      telefono:['',[Validators.required,Validators.minLength(9)]],
      email:['',[Validators.required,Validators.minLength(9)]],
      edad:['',[Validators.required,Validators.minLength(2)]],
      acercademi:['',[Validators.required,Validators.minLength(30)]],
      urlImg:['',[Validators.required,Validators.minLength(9)]],
      linkGit:['',[Validators.required,Validators.minLength(10)]],
      linkLn:['',[Validators.required,Validators.minLength(10)]],
      linkFace:['',[Validators.required,Validators.minLength(10)]],
      linkTwit:['',[Validators.required,Validators.minLength(10)]]
    })}


  ngOnInit(): void {
  }
  get Nombre(){
    return this.form.value('nombre');
  }
  get Apellido(){
    return this.form.value('apellido');
  }
  get Telefono(){
    return this.form.value('telefono');
  }
  get Email(){
    return this.form.value('email');
  }
  get Edad(){
    return this.form.value('edad');
  }
  get Acercademi(){
    return this.form.value('acercademi');
  }
  get UrlImg(){
    return this.form.value('urlImg');
  }
  get LinkGit(){
    return this.form.value('linkGit');
  }
  get LinkLn(){
    return this.form.value('linkLn');
  }
  get LinkFace(){
    return this.form.value('linkFace');
  }
  get LinkTwit(){
    return this.form.value('linkTwit');
  }
  
  

  enviaUser(){}



}
