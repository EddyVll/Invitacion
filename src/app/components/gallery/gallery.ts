import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  images = input.required<string[]>();
  activeImage = signal<string | null>(null);

  openImage(img: string) {
    this.activeImage.set(img);
  }

  closeImage() {
    this.activeImage.set(null);
  }
}
