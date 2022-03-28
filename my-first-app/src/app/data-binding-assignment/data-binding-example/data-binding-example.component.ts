import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-example',
  templateUrl: './data-binding-example.component.html',
  styleUrls: ['./data-binding-example.component.scss']
})
export class DataBindingExampleComponent implements OnInit {

  userName = '';


  constructor() { }

  ngOnInit(): void {
  }

  resetData(){
    this.userName='';
  }

}
