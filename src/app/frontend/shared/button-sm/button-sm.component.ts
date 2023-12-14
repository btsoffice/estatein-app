import { Component, Input } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './button-sm.component.html',
  styleUrl: './button-sm.component.scss',
})
export class ButtonComponent {
  @Input() buttonText: string = '';
  @Input() buttonLink: string = '';
  @Input() className: string[] = [];
}
