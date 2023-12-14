import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../button-sm/button-sm.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    RouterLinkActive,
    ButtonComponent,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isHidden: boolean = false;
  hideHeader() {
    this.isHidden = true;
  }
  onKeyup(){
    this.isHidden = !this.isHidden;
  }
}
