import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor() { }
  @Input() counter: number;

  ngOnInit() {
    this.counter=0;
  }

  public increment(): void
  {
    this.counter++;
    if(this.counter==7)
      {
        stop();
      }
    console.log("Count is %d", this.counter);
  }

  public decrement():void{
    this.counter--;
    if(this.counter<0)
      {
        stop();
      }
    console.log("Count is %d", this.counter);
  }

}
