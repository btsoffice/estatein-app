import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button-sm/button-sm.component';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
