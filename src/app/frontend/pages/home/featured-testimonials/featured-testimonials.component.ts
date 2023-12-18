import { Component } from '@angular/core';
import { SectionHeadersComponent } from '../../../shared/section-headers/section-headers.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/button-sm/button-sm.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-featured-testimonials',
  standalone: true,
  imports: [RouterModule, SectionHeadersComponent, ButtonComponent, CarouselModule],
  templateUrl: './featured-testimonials.component.html',
  styleUrl: './featured-testimonials.component.scss',
})
export class FeaturedTestimonialsComponent {
  title: string = 'What Our Clients Say';
  description: string =
    'Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.';

  sectionHeader = {
    sectionTitle: this.title,
    sectionDescription: this.description,
  };
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    margin: 30,
    lazyLoad: true,
    center: true,
    touchDrag: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navSpeed: 300,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };
}
