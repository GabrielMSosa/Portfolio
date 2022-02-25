import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import {SKILL} from "src/app/SKILL";
import {SkillServiceService} from "../../service/skill-service.service";
import {skills} from "src/app/mock-Skill";
@Component({
  selector: 'app-leng-prog',
  templateUrl: './leng-prog.component.html',
  styleUrls: ['./leng-prog.component.css']
})
export class LengProgComponent implements OnInit {
@Input() SkillInput1:SKILL=skills[0];

  constructor(private servi:SkillServiceService) { }

  ngOnInit(): void {    }

}
