import { Component } from '@angular/core';
import { FeaturedLinksComponent } from '../../shared/featured-links/featured-links.component';
@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [FeaturedLinksComponent],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent {

}
