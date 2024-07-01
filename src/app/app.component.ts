import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  animations: [
    trigger('fadein', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('1s', style({ opacity: 1 }))]),
    ]),
    trigger('translateRight', [
      state('void', style({ opacity: 0, transform: 'translateX(50px)' })),
      transition(':enter', [
        animate('1s', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0, transform: 'translateX(50px)' })),
      ]),
    ]),
    trigger('translateLeft', [
      state('void', style({ opacity: 0, transform: 'translateX(-50px)' })),
      transition(':enter', [
        animate('1s', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0, transform: 'translateX(-50px)' })),
      ]),
    ]),
  ],
})
export class AppComponent {
  @ViewChild('home', { static: true }) home!: ElementRef;
  @ViewChild('about', { static: true }) about!: ElementRef;
  @ViewChild('nextSection', { static: false }) nextSection!: ElementRef;
  @ViewChild('projects', { static: true }) projects!: ElementRef;
  @ViewChild('contact', { static: true }) contact!: ElementRef;

  scrollToElementWithOffset(element: HTMLElement): void {
    const header = document.querySelector('.header') as HTMLElement;
    const headerHeight = header.offsetHeight;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  constructor(private elementRef: ElementRef) {}

  title = 'portfolio-app';
  myName = 'Alro John T. Mercado';
  email = 'alromercado08@gmail.com';
  college = 'Divine Word College of Legazpi';
  jobPosition = 'Front-end Web Developer';

  language_logo = [
    'assets/logos/nodejs.png',
    'assets/logos/firebase.png',
    'assets/logos/mysql.png',
    'assets/logos/angular.png',
    'assets/logos/ts.png',
    'assets/logos/js.png',
    // 'assets/logos/php.png',
    'assets/logos/svelte.png',
    'assets/logos/html.png',
    'assets/logos/css.png',
    'assets/logos/tailwind.png',
  ];

  message_logo = [
    {
      path: 'assets/logos/github.png',
      link: 'https://github.com/AlroJohn',
      height: 30,
      width: 30,
    },
    {
      path: 'assets/logos/linkedin.png',
      link: 'https://www.linkedin.com/in/alro-john-mercado-b676172ba/?trk=opento_sprofile_topcard',
      height: 37,
      width: 37,
    },
    {
      path: 'assets/logos/gmail.png',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=alromercado08@gmail.com',
      height: 25,
      width: 25,
      isGmail: true, // Add this flag to identify the Gmail link
    },
  ];

  openLink(link: string, isGmail: boolean = false) {
    if (isGmail) {
      window.open(link, '_blank');
    } else {
      window.location.href = link;
    }
  }

  scrollToElement($element: HTMLElement): void {
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
