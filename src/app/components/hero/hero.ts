import { Component, input } from '@angular/core';
import { InvitationData } from '../../models/invitation.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  data = input.required<InvitationData>();

  scrollToRsvp() {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
  }
}
