import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Title]
})
export class AppComponent {
  
  public success:boolean = true;
  public failure:boolean = false;

  constructor(private router:Router,private title:Title){
    this.title.setTitle('Angular App');
  }

  routeToEvenComponent(){
   // this.router.navigateByUrl("/even");
   this.router.navigate(["even"]);
  }

}
