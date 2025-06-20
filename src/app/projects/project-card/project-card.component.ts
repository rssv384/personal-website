import { Component, inject, input, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent implements OnInit {
  private projectsService = inject(ProjectsService);

  project = input.required<Project>();
  imgUrl: string = '';

  async ngOnInit() {
    // get url for this projects related image file
    this.imgUrl = await this.projectsService.getImageUrl(this.project().imgSrc);
  }
}
