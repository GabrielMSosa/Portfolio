import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-lapiz',
  templateUrl: './btn-lapiz.component.html',
  styleUrls: ['./btn-lapiz.component.css']
})
export class BtnLapizComponent implements OnInit {
  BtnClick:boolean = false;
  info:string = "Aca va informacion personal mia";
  constructor() { }

  ngOnInit(): void {
  }
  On1Click(){
this.BtnClick=!this.BtnClick;

}}
