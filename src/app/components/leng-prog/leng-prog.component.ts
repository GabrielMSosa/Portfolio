import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import {SKILL} from "src/app/SKILL";
import {SkillServiceService} from "../../service/skill-service.service";

@Component({
  selector: 'app-leng-prog',
  templateUrl: './leng-prog.component.html',
  styleUrls: ['./leng-prog.component.css']
})
export class LengProgComponent implements OnInit {
  skillBD:SKILL[]=[];

  constructor(private servi:SkillServiceService) { }

  ngOnInit(): void {

    this.servi.GetSkillService().subscribe((skillBD)=>{this.skillBD = skillBD});


  }

}
