import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent implements OnInit {
  public Archivos: any =[];
 barra:string = "";
 estilo:string = "";
 public imagePath:any;
 imgURL: any;
 public message:string="";
 age: string="";

 preview(files: any) {
   if (files.length === 0)
     return;

   var mimeType = files[0].type;
   if (mimeType.match(/image\/*/) == null) {
     this.message = "Only images are supported.";
     return;
   }

   var reader = new FileReader();
   this.imagePath = files;
   reader.readAsDataURL(files[0]); 
   reader.onload = (_event) => { 
     this.imgURL = reader.result; 
   }
 } 
  
  constructor(){ 
    
  
  }

  ngOnInit(): void {
    
  }
  

  
  
  


 

  updateGraph(){
    //this.estilo = "width: " +this.barra+"%";
    console.log("width: " +this.barra+"%");

  }

}
