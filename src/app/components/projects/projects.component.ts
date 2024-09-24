import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects =[
    {
      title: 'Projet 1',
      description: "Voici la description du projet que j'ai pu réaliser",
      image: '/assets/project1.jpg',
      link: 'https://lienversleprojet1.com'
    },
    {
      title: 'Projet 2',
      description: "Voici la description du projet que j'ai pu réaliser",
      image: '/assets/project2.jpg',
      link: 'https://lienversleprojet1.com'
    },
    {
      title: 'Projet 3',
      description: "Voici la description du projet que j'ai pu réaliser",
      image: '/assets/project3.jpg',
      link: 'https://lienversleprojet1.com'
    },
  ]


}
