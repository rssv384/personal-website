import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { Project } from './project.model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  private projectsService = inject(ProjectsService);
  private destroyRef = inject(DestroyRef);

  allProjects: Project[] = [];

  ngOnInit() {
    const subscription = this.projectsService
      .getAllProjects()
      .subscribe((data) => {
        this.allProjects = data;
      });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
