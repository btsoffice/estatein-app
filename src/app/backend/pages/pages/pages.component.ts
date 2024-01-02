import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../services/pages.service';
import { PageData } from '../../interfaces/pages';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent implements OnInit {
  baseUrl = 'http://localhost:3333';
  pageData: PageData[] = [];
  constructor(private pageService: PagesService) { }
  ngOnInit(): void {
    this.pageService.getPages().subscribe({
      next: (value: PageData[]) => this.pageData = value,
      error: (error) => console.error(error)
    });
  }
  

}
