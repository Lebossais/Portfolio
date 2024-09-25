import { Component, ElementRef, AfterViewInit, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {


  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    const progressBars: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.progress');
    const skills: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.skill'); // Sélectionne les compétences

    const fillProgressBars = () => {
      progressBars.forEach((progress) => {
        const value = progress.getAttribute('data-value');
        this.renderer.setStyle(progress, 'width', `${value}%`);
      });
    };

    const checkScroll = () => {
      const triggerBottom = window.innerHeight / 5 * 4;

      skills.forEach((skill) => {
        const skillTop = skill.getBoundingClientRect().top;
        if (skillTop < triggerBottom) {
          this.renderer.addClass(skill, 'visible'); // Ajoute la classe "visible" pour l'effet fade-in
        }
      });

      progressBars.forEach((progress) => {
        const progressTop = progress.getBoundingClientRect().top;
        if (progressTop < triggerBottom) {
          fillProgressBars();
        }
      });
    };

    window.addEventListener('scroll', checkScroll);

    // Vérifie dès le chargement
    checkScroll();
  }
}
