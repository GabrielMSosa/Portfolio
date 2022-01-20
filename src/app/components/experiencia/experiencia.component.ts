import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Experiencias } from 'src/app/mock-experience';
import { EXPE } from 'src/app/Experience';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
 AddItem:boolean = false;
 EXPBD:EXPE[] =[];

  constructor(private tareas:TaskService) { }

  ngOnInit(): void {
    this.tareas.getExps().subscribe((EXPBD)=>{this.EXPBD=EXPBD});
  }
  addNewTask(){
    console.log("NuevaTarea!");
    this.AddItem=!this.AddItem;
    console.log(this.AddItem);
  }
  AddExp(entrada:EXPE){
      this.tareas.serviAddExp(entrada).subscribe((entrada)=>{this.EXPBD.push(entrada)});    


  }

}
