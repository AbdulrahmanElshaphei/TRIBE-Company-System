import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.scss']
})
export class InfoDetailsComponent {

}
