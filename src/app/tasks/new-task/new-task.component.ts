import { Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Input({required:true}) userId!:string;
@Output() addTask = new EventEmitter();
@Output() closeTaskDialog = new EventEmitter<void>();
@Output() submitTask = new EventEmitter<NewTaskData>();
inputTitle = '';
inputSummary = '';
inputDate = ''

// call the task service using the inject function

private taskService = inject(TasksService)

addNewTask(){
  this.addTask.emit()
}

cancelAddingTask(){
  this.closeTaskDialog.emit()
}

onSubmitTask(){
 this.taskService.addNewTask({
  dueDate:this.inputDate,
  title:this.inputTitle,
  summary:this.inputSummary
 },this.userId)
 this.closeTaskDialog.emit()
}
}
