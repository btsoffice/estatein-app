import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';
import { PageData } from '../../interfaces/pages';
import { TableModule} from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [TableModule, AvatarModule],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent implements OnInit {
  baseUrl = 'http://localhost:3333';
  pageData: PageData[] = [];
  first: number = 0;
  rows: number = 1;
  constructor(private pageService: PagesService) { }
  ngOnInit(): void {
    this.pageService.getPages().subscribe({
      next: (value: PageData[]) => this.pageData = value,
      error: (error) => console.error(error)
    });
  }
  pageChange(event: { first: number; rows: number; }){
    this.first = event.first;
    this.rows = event.rows
  }

}
