import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Details } from './components/details/details';
import { Message } from './components/message/message';
import { Gallery } from './components/gallery/gallery';
import { Rsvp } from './components/rsvp/rsvp';
import { Footer } from './components/footer/footer';
import { INVITATION_DATA } from './data/invitation-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header, Hero, Details,
    Message, Gallery,
    Rsvp, Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  data = INVITATION_DATA;
}
