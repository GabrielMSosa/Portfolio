import { Component, OnInit } from '@angular/core';
import {SubirimgService } from 'src/app/service/subirimg.service';
import {ARCH} from 'src/app/ARCH';

@Component({
  selector: 'app-skills1',
  templateUrl: './skills1.component.html',
  styleUrls: ['./skills1.component.css']
})
export class Skills1Component implements OnInit {
  public Archivos: any =[];
  public ArchGuardar: ARCH= { id:0,
  nombre:"", 
  imagen:""};//inicializo
  idioma1:string="Ingles"; 
  idioma2:string="Portugues";
  tipoIdioma : string[]= ['Bajo','Intermedio','Avanzado','Muy Avanzado','Bilingue'];

  public mostrar:boolean = false;

  public archiGETBD:ARCH[]=[];
  public Lastimg:number=0;
 barra:string = "";
 estilo:string = "";
 public imagePath:any;
 imgURL: any;
 public message:string="";
 age: string="";
 
  constructor() { }

  ngOnInit(): void {
  }

}
