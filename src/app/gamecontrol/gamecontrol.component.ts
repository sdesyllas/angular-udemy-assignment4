import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() intervalTicked = new EventEmitter<number>();
  oddNumbers: Array<number> = [];
  evenNumbers: Array<number> = [];
  currentNumber: number = 0;
  intervalId;

  constructor() { }

  ngOnInit() {
  }

  increaseNumberPerTicks() {
    console.log(this.currentNumber);
    this.currentNumber++;
    if (this.currentNumber % 2 == 0) {
      this.evenNumbers.push(this.currentNumber);
    }
    else {
      this.oddNumbers.push(this.currentNumber);
    }
  }

  startGame() {
    this.intervalId = setInterval(() => {
      this.increaseNumberPerTicks();
    }, 1000);
  }

  stopGame() {
    console.log('stopped!');
    clearInterval(this.intervalId);
  }
}
