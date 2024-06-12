import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent]
})
export class AppComponent {
  title = 'portfolio-app';
  myName = 'Alro John T. Mercado';

  language_logo = [
    'assets/logos/nodejs.png',
    'assets/logos/firebase.png',
    'assets/logos/mysql.png',
    'assets/logos/angular.png',
    'assets/logos/ts.png',
    'assets/logos/js.png',
    'assets/logos/php.png',
    'assets/logos/html.png',
    'assets/logos/css.png',
    'assets/logos/tailwind.png',
  ]
}
