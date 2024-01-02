import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageData } from '../interfaces/pages';
@Injectable({
  providedIn: 'root'
})
export class PagesService {
  baseUrl = 'http://localhost:3333/api/pages';
  constructor(private httpClient: HttpClient) { }

  getPages(): Observable<PageData[]>{
    return this.httpClient.get<PageData[]>(this.baseUrl)
  }

}
