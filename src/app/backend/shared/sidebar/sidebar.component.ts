import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit{
  items!: MenuItem[];
  ngOnInit(){
    this.items = [
      {
        label: 'Navigation',
        items: [
          {
            label: 'Pages',
            routerLink: '/admin/pages',
            items: [
              {
                label: 'Home',
                icon: 'pi pi-fw pi-plus',
                routerLink: '/admin/home'
              },
              {
                label: 'About',
                icon: 'pi pi-fw pi-plus',
                routerLink: '/admin/about'
              }
            ]
          }
        ]
      }
    ]
  }
}
