import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormioModule } from '@formio/angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormioModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'formio-modular-app';
}
