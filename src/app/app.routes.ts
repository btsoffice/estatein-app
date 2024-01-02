import { Routes } from '@angular/router';
import { HomeComponent } from '../app/frontend/pages/home/home.component';
import { PagenotfoundComponent } from '../app/frontend/pages/pagenotfound/pagenotfound.component';
import { AboutComponent } from '../app/frontend/pages/about/about.component';
import { ContactComponent } from './frontend/pages/contact/contact.component';
import { PropertiesComponent } from './frontend/pages/properties/properties.component';
import { ServicesComponent } from './frontend/pages/services/services.component';
import { LayoutComponent } from './frontend/layout/layout.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { AdminHomeComponent } from './backend/pages/admin-home/admin-home.component';
import { AdminAboutComponent } from './backend/pages/admin-about/admin-about.component';
import { LoginComponent } from './backend/login/login.component';
import { PagesComponent } from './backend/pages/pages/pages.component';

export const routes: Routes = [
  /**
 * Admin Routes
 */
  {path: 'admin', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'about', component: AdminAboutComponent },
      { path: 'pages', component: PagesComponent },
      {path: '', redirectTo: 'login', pathMatch: 'full'},
    ]
  },
  {path: 'login', component: LoginComponent},
  {
    /**
     * Front End Routes
     */
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', redirectTo: '', pathMatch: 'full' },
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'properties', component: PropertiesComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
  /**
   * Error 404 Route
   */
  { path: '**', component: PagenotfoundComponent },
];
