import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe, isPlatformBrowser } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  providers: [DatePipe],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
 
}
