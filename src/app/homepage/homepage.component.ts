import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '../projects/project-card/project-card.component';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink, ProjectCardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {}
