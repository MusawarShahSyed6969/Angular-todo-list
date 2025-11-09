import { Component, signal } from '@angular/core';
import { Greetings } from '../greetings/greetings';
import { Counter } from '../components/counter/counter';

@Component({
  selector: 'app-home',
  imports: [Greetings,Counter],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

message = signal("Musawar")
}
