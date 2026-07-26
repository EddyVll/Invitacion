import { Component, input } from '@angular/core';
import { InvitationData } from '../../models/invitation.model';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [],
  templateUrl: './rsvp.html',
  styleUrl: './rsvp.scss',
})
export class Rsvp {
  data = input.required<InvitationData>();
}