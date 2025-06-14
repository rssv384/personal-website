import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: 'Raúl Soto | Software Engineer',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Raúl Soto | About',
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Raúl Soto | Projects',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Raúl Soto | Contact',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
