import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-featured-links',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './featured-links.component.html',
  styleUrl: './featured-links.component.scss'
})
export class FeaturedLinksComponent {

}
