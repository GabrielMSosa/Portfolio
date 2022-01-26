import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EDU} from 'src/app/Edu';
import { Educacion } from 'src/app/mock-Educacion';
@Component({
  selector: 'app-item-edu',
  templateUrl: './item-edu.component.html',
  styleUrls: ['./item-edu.component.css']
})
export class ItemEduComponent implements OnInit {
  @Input() educacion:EDU = Educacion[0];
  @Input() newitem:boolean = false;
  @Output() DeleteExp: EventEmitter<EDU>=new EventEmitter;
  Imagen:string ="";
  constructor() { }

  ngOnInit(): void {
  }
  EditarExperiencia(input1:EDU){
    this.newitem
  }
  BorrarExperiencia(input1:EDU){
    console.log(this.educacion.id);
    this.DeleteExp.emit(input1);
  }
}
