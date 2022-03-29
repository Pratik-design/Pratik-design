import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was created";
  serverId = 10;
  statusCode = 'offline';
  serverName = 'Test Server';
  serverCreated = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    
  }

  ngOnInit(): void {
  }

  changeServerCreationStatus(event:any){
    //console.log("we are in method", event);
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created with name "+ this.serverName;
  }

  updateServerName(event:any){
    //console.log(event.target.value);
    this.serverName = event.target.value;
  }

}
