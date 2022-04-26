import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  @Output() incrementedValue = new EventEmitter<any>();
  public count:number = 0;
 public interval:any;
  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
   this.interval = setInterval(()=>{
      this.incrementedValue.emit(this.count + 1);
      this.count++;
    },1000);
       
  }

  pauseGame(){
   clearInterval(this.interval);
  }

  stopGame(){
    this.incrementedValue.emit(0);
  }

}
