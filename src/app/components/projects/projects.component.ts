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
      description: "Voici la description du projet que j'ai pu réaliser",
      image: '/assets/Projet2.jpg',
      link: 'https://lienversleprojet1.com'
    },
    {
      description: "Voici la description du projet que j'ai pu réaliser",
      image: '/assets/Projet3.jpg',
      link: 'https://lienversleprojet1.com'
    },
    {
      description: "Voici la description du projet que j'ai pu réaliser",
      image: '/assets/Projet1.jpg',
      link: 'https://lienversleprojet1.com'
    },
    {
      description: "Voici la description du projet que j'ai pu réaliser",
      image: '/assets/Projet4.jpg',
      link: 'https://lienversleprojet1.com'
    },
    {
      description: "Voici la description du projet que j'ai pu réaliser",
      image: '/assets/Projet3.jpg',
      link: 'https://lienversleprojet1.com'
    },
  ]


}
