import { Component } from '@angular/core';
import { FeaturedLinksComponent } from '../../shared/featured-links/featured-links.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FeaturedLinksComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
