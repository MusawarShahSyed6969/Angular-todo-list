import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './home/home';


@Component({
  selector: 'app-root',
  imports: [ Header, Home],
  template: `
  
    <main>
      <app-header/>
    </main>
    <app-home/>

  `,
  styles: [``],
})
export class App {

  protected readonly name = signal('Musawar Shah');
}
