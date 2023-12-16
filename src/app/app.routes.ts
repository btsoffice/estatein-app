import { Routes } from '@angular/router';
import { HomeComponent } from '../app/frontend/pages/home/home.component';
import { PagenotfoundComponent } from '../app/frontend/pages/pagenotfound/pagenotfound.component';
import { AboutComponent } from '../app/frontend/pages/about/about.component';
import { ContactComponent } from './frontend/pages/contact/contact.component';
import { PropertiesComponent } from './frontend/pages/properties/properties.component';
import { ServicesComponent } from './frontend/pages/services/services.component';
import { LayoutComponent } from './frontend/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'properties', component: PropertiesComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
  { path: '**', component: PagenotfoundComponent },
];
