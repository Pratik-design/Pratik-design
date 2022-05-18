import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorMessage:string = '';

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    //1st way
    //this.errorMessage = this.route.snapshot.data['message'];
   
   //2nd way - If there is some chage on the page, this way will be used...more preferred
    this.route.data.subscribe(
      (data : Data) => {
        this.errorMessage = data['message'];
      }
    );
  }

}
