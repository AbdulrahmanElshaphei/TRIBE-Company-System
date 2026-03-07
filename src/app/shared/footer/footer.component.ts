import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  openInsta() {
    window.open('https://www.instagram.com/code.cast6/', '_blank');
  }

  openFace(){
    window.open('https://web.facebook.com/profile.php?id=61585531988084', '_blank');
  }

  openTik(){
    window.open('https://www.tiktok.com/@code.cast6?lang=en-GB', '_blank');
  }
}
