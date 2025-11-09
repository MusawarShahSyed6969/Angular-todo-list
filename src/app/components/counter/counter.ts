import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss',
})
export class Counter {
  counter = signal(0);

  increament(){
    this.counter.update(val => val + 1)
  }

  decreament(){
    this.counter.update(val => val - 1)
  }

  resetCounter()
  {
    this.counter.set(0)
  }
}
