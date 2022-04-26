import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-final',
  templateUrl: './data-binding-final.component.html',
  styleUrls: ['./data-binding-final.component.scss']
})
export class DataBindingFinalComponent implements OnInit {

  public evenNumbers:number[] = [];
  public oddNumbers:number[] = [];
  public isZero:boolean=false;
 
  constructor() { }

  ngOnInit(): void {
   
  }

  public getCount($event:any){
    $event === 0 ? this.isZero = true : this.isZero = false;
    $event % 2 ===0 ? this.evenNumbers.push($event) : this.oddNumbers.push($event);
  }

}
