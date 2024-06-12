import { Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, CommonModule]
})
export class AppComponent {

  constructor(private elementRef: ElementRef) {}

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
  ];

  message_logo = [
    { path: 'assets/logos/github.png', link: 'https://github.com/AlroJohn', height: 30, width: 30 },
    { path: 'assets/logos/linkedin.png', 
    link: 'https://www.linkedin.com/in/alro-john-mercado-b676172ba/?trk=opento_sprofile_topcard', height: 37, width: 37 },
    { path: 'assets/logos/gmail.png', link: 'mailto:alromercado08@gmail.com', height: 25, width: 25 },
  ];

  scrollToElement($element: HTMLElement): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

}
