import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';
import { CardComponent } from "../UI/card/card.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})


export class TasksComponent {
  @Input({required:true}) name!:string;
  @Input() avatar!:string;
  @Input({required:true}) id!:string;
  isAddingNewTask = false;
  
  private taskService:TasksService;

  constructor(taskService:TasksService){
    this.taskService = taskService
  }
    get selectedUserTask (){
      return this.taskService.getUsersTasks(this.id)
    }

  
    onAddNewTask(){
      this.isAddingNewTask = true;
    }

    onCancelAddingTask(){
      this.isAddingNewTask = false;
    }

    onSubmitNewTask(){
      this.isAddingNewTask=false;
    }
}
