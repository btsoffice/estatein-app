import { Component } from '@angular/core';
import { SectionHeadersComponent } from '../../../shared/section-headers/section-headers.component';
import { ButtonComponent } from '../../../shared/button-sm/button-sm.component';
@Component({
  selector: 'app-featured-faq',
  standalone: true,
  imports: [SectionHeadersComponent, ButtonComponent],
  templateUrl: './featured-faq.component.html',
  styleUrl: './featured-faq.component.scss'
})
export class FeaturedFaqComponent {
  title: string = 'Frequently Asked Questions';
  description: string = "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.";
  sectionHeader = {
    sectionTitle: this.title,
    sectionDescription: this.description
  }
}
