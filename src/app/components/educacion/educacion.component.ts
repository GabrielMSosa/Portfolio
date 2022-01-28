import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Educacion } from 'src/app/mock-Educacion';
import { EDU } from 'src/app/Edu';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  AddItem:boolean = false;
  EDUBD:EDU[] =[];
  constructor(private tareas:EducacionService) { }

  ngOnInit(): void {
    this.tareas.getServiceEdus().subscribe((EDUBD)=>{this.EDUBD=EDUBD});
  }
  addNewTask(){
    console.log("NuevaTarea!");
    this.AddItem=!this.AddItem;
    console.log(this.AddItem);
  }
  AddExp(entrada:EDU){
      this.tareas.serviAddEdu(entrada).subscribe((entrada)=>{this.EDUBD.push(entrada)});    


  }
  
  DeleteEdu(entrada:EDU){
    this.tareas.DeleteServiceEdu(entrada).subscribe(()=>{
      this.EDUBD=this.EDUBD.filter(t => t.id !==entrada.id)

    })
  }
  AddEdu(entrada:EDU){
    this.tareas.serviAddEdu(entrada).subscribe((entrada)=>{this.EDUBD.push(entrada)});    


}





}
