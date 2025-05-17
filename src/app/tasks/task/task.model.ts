export interface Task{
  title:string;
  dueDate:string,
  summary:string,
  id:string,
  userId:string
};

export interface NewTaskData {
  title:string,
  summary:string,
  dueDate:string
}