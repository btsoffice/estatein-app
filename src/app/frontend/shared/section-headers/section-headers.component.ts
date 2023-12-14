import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-headers',
  standalone: true,
  imports: [],
  templateUrl: './section-headers.component.html',
  styleUrl: './section-headers.component.scss'
})
export class SectionHeadersComponent {
@Input() sectionHeader: {sectionTitle: string, sectionDescription: string} = {sectionTitle: '', sectionDescription: ''};
}
