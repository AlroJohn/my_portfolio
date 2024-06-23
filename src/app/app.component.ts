import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('home', { static: true }) home!: ElementRef;
  @ViewChild('about', { static: true }) about!: ElementRef;
  @ViewChild('projects', { static: true }) projects!: ElementRef;
  @ViewChild('contact', { static: true }) contact!: ElementRef;

  scrollToElementWithOffset(element: HTMLElement): void {
    const header = document.querySelector('.header') as HTMLElement;
    const headerHeight = header.offsetHeight;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  

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
    // 'assets/logos/php.png',
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
