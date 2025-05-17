import { JsonPipe } from "@angular/common";
import { type NewTaskData } from "./task/task.model";
import { Injectable } from "@angular/core";

@Injectable ({providedIn:'root'}) //  this tells angular to use this service globally in 
 export class TasksService {
  private Tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];


  // helper function to store the task in the localStorage 

  constructor(){
    const storeTasks = localStorage.getItem('storeTasks');
    if(storeTasks){
      this.Tasks = JSON.parse(storeTasks)
    }
  }


  addNewTask(taskData: NewTaskData, id: string) {
    this.Tasks.unshift({
      id: new Date().getTime().toString(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
      userId: id,
    });
    this.saveTasks()
  }

  getUsersTasks(userId: string) {
    return this.Tasks.filter((task) => task.userId === userId);
  }

  completeTask(id:string){
    this.Tasks = this.Tasks.filter((task)=> task.id !== id );
    this.saveTasks();
  }

  private saveTasks (){
    localStorage.setItem('storeTasks',JSON.stringify(this.Tasks))
  }
}

