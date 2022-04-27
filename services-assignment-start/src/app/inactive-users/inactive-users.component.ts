import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  //@Output() userSetToActive = new EventEmitter<number>();

  constructor(private userService:UserServiceService){  }

  onSetToActive(id: number) {
    this.userService.userSetToActive.emit(id);
//    this.userSetToActive.emit(id);
  }
}
