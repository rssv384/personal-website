import { Component, inject } from '@angular/core';
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
  featuredProjects = this.projectsService.featuredProjects;
}
