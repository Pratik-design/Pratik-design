import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers:string[] = [];
  inactiveUsers:string[] = [];
  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }

  constructor(private userService:UserServiceService){

    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;

    this.userService.userSetToInactive.subscribe(
      (id:number) => this.userService.onSetToInactive(id)
    );

    this.userService.userSetToActive.subscribe(
      (id:number) => this.userService.onSetToActive(id)
    );
  }

}
