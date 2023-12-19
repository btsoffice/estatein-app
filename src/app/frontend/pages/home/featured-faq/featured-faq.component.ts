import { Component } from '@angular/core';
import { SectionHeadersComponent } from '../../../shared/section-headers/section-headers.component';
import { ButtonComponent } from '../../../shared/button-sm/button-sm.component';
import { CarouselModule ,OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-featured-faq',
  standalone: true,
  imports: [SectionHeadersComponent, ButtonComponent, CarouselModule],
  templateUrl: './featured-faq.component.html',
  styleUrl: './featured-faq.component.scss',
})
export class FeaturedFaqComponent {
  title: string = 'Frequently Asked Questions';
  description: string =
    "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.";
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
    dots: false,
    touchDrag: true,
    autoplay: true,
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
