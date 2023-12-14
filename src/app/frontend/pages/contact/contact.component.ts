import { Component } from '@angular/core';
import { FeaturedLinksComponent } from '../../shared/featured-links/featured-links.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FeaturedLinksComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
