import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent implements OnInit {
 barra:string = "";
 estilo:string = "";
  constructor() { }

  ngOnInit(): void {
    
    
  }
  updateGraph(){
    //this.estilo = "width: " +this.barra+"%";
    console.log("width: " +this.barra+"%");

  }

}
