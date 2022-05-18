import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,private route:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; //+ in front of this converts the string to the number
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params : Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );

    //dynamic data
    // this.route.data.subscribe(
    //   (data:Data) =>{
    //     this.server = data['server'];
    //   }
    // );
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo : this.route , queryParamsHandling: 'preserve'}); //this actually os a relative path
    //since we are already on /servers/id path, we only need edit appended in front of existing route
  }

}
