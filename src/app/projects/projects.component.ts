import { Component, inject } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private projectsService = inject(ProjectsService);

  allProjects = this.projectsService.allProjects;
}
