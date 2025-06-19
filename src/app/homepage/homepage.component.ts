import { Component, DestroyRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '../projects/project-card/project-card.component';
import { Project } from '../projects/project.model';
import { ProjectsService } from '../projects/projects.service';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink, ProjectCardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  private projectsService = inject(ProjectsService);
  private destroyRef = inject(DestroyRef);
  featuredProjects: Project[] = [];

  constructor() {
    const subscription = this.projectsService
      .getFeaturedProjects()
      .subscribe((data) => {
        this.featuredProjects = data;
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
