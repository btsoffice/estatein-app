import { Component } from '@angular/core';
import { FeaturedLinksComponent } from '../../shared/featured-links/featured-links.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FeaturedLinksComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('About | Estatein');
  }
}
