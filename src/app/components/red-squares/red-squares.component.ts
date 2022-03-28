import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red-squares',
  templateUrl: './red-squares.component.html',
  styleUrls: ['./red-squares.component.scss']
})
export class RedSquaresComponent implements OnInit {
  numbers: number[] = [];

  color = 'rgb(248, 105, 105)';

  constructor() { }

  pushInNumbers() {
    for (let i = 0; i < 49; i++) {
      this.numbers.push(i);
    }
    console.log(this.numbers);
  }

  ngOnInit(): void {
    this.pushInNumbers()
  }

}
