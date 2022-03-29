import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-assignment',
  templateUrl: './directive-assignment.component.html',
  styleUrls: ['./directive-assignment.component.scss']
})
export class DirectiveAssignmentComponent implements OnInit {
  togglePara = false;
  count = 0;
  clickedArray:number[] = [];
  log:number[] =[];

  constructor() { }

  ngOnInit(): void {
  }

  displayPara(){
    this.togglePara = !this.togglePara;
  this.clickedArray.push(this.count++);
  }

  onToggleDetails(){
    this.togglePara = !this.togglePara;
    //this.log.push(this.log.length + 1);
    
  }

  clearCount(){
    this.togglePara = false;
    this.count = 0;
  }

}
