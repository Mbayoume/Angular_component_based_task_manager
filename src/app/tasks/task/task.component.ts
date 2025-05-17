import { Component, EventEmitter, inject,Input,Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../UI/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
// @Input({required:true}) userId!:string;
@Input({required:true}) task!:Task;


private taskServcie = inject(TasksService);



completeTaskAction(){
  // this.completeTask.emit(this.task.id)
  this.taskServcie.completeTask(this.task.id);
}

}
