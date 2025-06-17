import { Injectable } from '@angular/core';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private dummyProjects: Project[] = [
    {
      title: 'Project 1',
      description:
        'This is a dummy project. All data is to be used as a temporary placeholder during development.',
      githubRepoLink: 'https://github.com',
      liveDemoLink: '#',
      imgSrc: 'icon.png',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      featured: true,
    },
    {
      title: 'Project 2',
      description:
        'This is a dummy project. All data is to be used as a temporary placeholder during development.',
      githubRepoLink: 'https://github.com',
      liveDemoLink: '#',
      imgSrc: 'icon.png',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      featured: true,
    },
    {
      title: 'Project 3',
      description:
        'This is a dummy project. All data is to be used as a temporary placeholder during development.',
      githubRepoLink: 'https://github.com',
      liveDemoLink: '#',
      imgSrc: 'icon.png',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      featured: false,
    },
    {
      title: 'Project 4',
      description:
        'This is a dummy project. All data is to be used as a temporary placeholder during development.',
      githubRepoLink: 'https://github.com',
      liveDemoLink: '#',
      imgSrc: 'icon.png',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      featured: false,
    },
    {
      title: 'Project 5',
      description:
        'This is a dummy project. All data is to be used as a temporary placeholder during development.',
      githubRepoLink: 'https://github.com',
      liveDemoLink: '#',
      imgSrc: 'icon.png',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
      featured: true,
    },
  ];

  public get allProjects(): Project[] {
    return this.dummyProjects;
  }

  public get featuredProjects(): Project[] {
    return this.dummyProjects.filter((project) => project.featured);
  }
}
