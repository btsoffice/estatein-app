import { Component } from '@angular/core';
import { ButtonComponent } from '../button-sm/button-sm.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss'
})
export class CtaComponent {

}
