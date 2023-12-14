import { Component } from '@angular/core';
import { SectionHeadersComponent } from '../../../shared/section-headers/section-headers.component';
import { ButtonComponent } from '../../../shared/button-sm/button-sm.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-featured-properties',
  standalone: true,
  imports: [SectionHeadersComponent, ButtonComponent, CarouselModule],
  templateUrl: './featured-properties.component.html',
  styleUrl: './featured-properties.component.scss',
})
export class FeaturedPropertiesComponent {
  title: string = 'Featured Properties';
  description: string =
    'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Property Details" for more information.';
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
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    navSpeed: 300,
    navText: ['<i class="bi bi-arrow-left-circle"></i>', '<i class="bi bi-arrow-right-circle"></i>'],
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
