import { Component, Input, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/mock-experience';
import { EXPE } from 'src/app/Experience';


@Component({
  selector: 'app-item-exp',
  templateUrl: './item-exp.component.html',
  styleUrls: ['./item-exp.component.css']
})
export class ItemExpComponent implements OnInit {
  @Input() experiencias:EXPE = Experiencias[0];
  


  constructor() { }

  ngOnInit(): void {
  }

}
