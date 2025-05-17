import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { UsersData } from './users_data';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UsersComponent,TasksComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent {
users = UsersData;
user_name = '';
selectedUserId:string = '';
user_avatar = '';

// selectedUser (userId:string){
//   return this.users.find((user)=>user.id === userId);
// }

onSelectUser(id:string){
  const selectedUser = this.users.find(user => user.id === id);
  
    if (selectedUser) {
      this.selectedUserId = selectedUser.id;
      this.user_avatar = 'assets/users/'+ selectedUser.avatar;
      return this.user_name = selectedUser.name;

    } else {
      return 'user not found'
    }
};




}
