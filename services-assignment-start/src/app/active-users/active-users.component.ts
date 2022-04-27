import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
 // @Output() userSetToInactive = new EventEmitter<number>();


  constructor(private userService:UserServiceService){}

  onSetToInactive(id: number) {
    this.userService.userSetToInactive.emit(id);
  //  this.userSetToInactive.emit(id);
  }
}
