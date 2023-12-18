import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HeroComponent } from './hero/hero.component';
import { FeaturedLinksComponent } from '../../shared/featured-links/featured-links.component';
import { FeaturedPropertiesComponent } from './featured-properties/featured-properties.component';
import { FeaturedTestimonialsComponent } from './featured-testimonials/featured-testimonials.component';
import { FeaturedFaqComponent } from './featured-faq/featured-faq.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturedLinksComponent,
    FeaturedPropertiesComponent,
    FeaturedTestimonialsComponent,
    FeaturedFaqComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Home | Estatein');
  }
}
