import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersData } from '../users_data';
import { type User } from './user.model';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})


export class UsersComponent {
  @Input({required:true}) user!: User;
  @Input({required:true}) active!:boolean;
  // now let's create an output to emit a  new events 



  @Output() userActions = new EventEmitter<string>();
get imagePath(){
  return "./assets/users/"+this.user.avatar;
};

onSelectUser() {
 this.userActions.emit(this.user.id)

}
}
