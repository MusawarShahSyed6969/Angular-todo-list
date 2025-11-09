import { Component, signal } from '@angular/core';
import { Greetings } from '../greetings/greetings';

@Component({
  selector: 'app-home',
  imports: [Greetings],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

message = signal("Musawar")
}
