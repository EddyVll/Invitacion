import { Component, input } from '@angular/core';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  templateUrl: './message.html',
  styleUrl: './message.scss',
})
export class Message {
  message = input.required<string>();
}
