import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  techAndTools: string[] = [
    'Python',
    'Angular',
    'TypeScript',
    'HTML',
    'CSS',
    'JavaScript',
    'PostgreSQL',
    'MySQL',
    'Flask',
    'Git',
    'VS Code',
  ];
}
