import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import {Subscription} from'rxjs';
import {TaskService} from 'src/app/service/task.service';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.css']
})
export class AddTextComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task>=new EventEmitter();
  @Input() showAddTask:boolean=false;

  info: string = '';
  //subscription:Subscription;
  

  constructor( 
    //private taskService:TaskService

   ) {
    //this.subscription=this.taskService.onToggle()
    //.subscribe(value=>this.showAddTask=value);
    }
    enviarTexto(){


    }
  ngOnInit(): void {
  
  
  }




  
}
