import { Component, input } from '@angular/core';
import { InvitationData } from '../../models/invitation.model';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  data = input.required<InvitationData>();
}
