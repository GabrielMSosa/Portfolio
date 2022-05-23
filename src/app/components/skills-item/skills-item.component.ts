import { Component, OnInit } from '@angular/core';
import {SubirimgService } from 'src/app/service/subirimg.service';
import {ARCH} from 'src/app/ARCH';





@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent implements OnInit {
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

 constructor(private Miservicio :SubirimgService){

    
   }

/**Servicios de angular 
 *  UploadImg(ENTRADA:ARCH) par asubir la imagen a la bd de
 *   GetUpload() para obtener la imagen de la bd 
 * 
*/


/*
 preview(files: any) {
   if (files.length === 0)
     return;

   var mimeType = files[0].type;
   if (mimeType.match(/image\/*/ /*(este tengo que sacar el otro de ala do no )) == null) {
     this.message = "Only images are supported.";
     return;
   }
   //console.log(files);
   var reader = new FileReader();
   this.imagePath = files;
   reader.readAsDataURL(files[0]); 
   reader.onload = (_event) => { 
   this.imgURL = reader.result; 

    //console.log(this.imgURL);
      var json= JSON.stringify(this.imgURL);
      //console.log(json); 
   }
   
 }
 */

 
  //vamos a ver aca https://techclub.tajamar.es/subir-archivos-de-imagen-en-angular-con-api/ 
  /* tenemos que generar un boton y subir a un json la imagen
  tenemos que generar el servicio para simular la api */
  

  ngOnInit(): void {
    
  }


  EventFile (files: any) {
      if (files.length === 0)
        return;
        this.MostrardatosBD();

      var mimeType = files[0].type;
      if (mimeType.match(/image\/*/ ) == null) {
        this.message = "Only images are supported.";
        return;
      }
      //console.log(files);
      var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]); 
      this.ArchGuardar.id=this.archiGETBD.length;
      this.ArchGuardar.nombre=files[0].name;
      

      
      
      reader.onload = (_event) => { 
        this.imgURL = reader.result; 
        
        //console.log(this.imgURL);
         var json= JSON.stringify(this.imgURL);
         this.ArchGuardar.imagen=this.imgURL; 
         //console.log(json); 



      }
      
    }  

  
  
  SubirBD(){ 
    this.Miservicio.UploadImg(this.ArchGuardar).subscribe(Response => {});
    this.mostrar=false;

  }

  MostrardatosBD()
  {
    this.Miservicio.GetUpload().subscribe((archiGETBD)=>(this.archiGETBD=archiGETBD));
    this.mostrar=true;
    


  }
  
  
  


 

  updateGraph(){
    //this.estilo = "width: " +this.barra+"%";
    //console.log("width: " +this.barra+"%");

  }

}
