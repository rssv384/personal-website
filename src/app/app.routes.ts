import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: 'Raúl Soto | Software Engineer',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((mod) => mod.AboutComponent),
    // component: AboutComponent,
    title: 'Raúl Soto | About',
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./projects/projects.component').then(
        (mod) => mod.ProjectsComponent,
      ),
    // component: ProjectsComponent,
    title: 'Raúl Soto | Projects',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((mod) => mod.ContactComponent),
    // component: ContactComponent,
    title: 'Raúl Soto | Contact',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (mod) => mod.NotFoundComponent,
      ),
    // component: NotFoundComponent,
  },
];
