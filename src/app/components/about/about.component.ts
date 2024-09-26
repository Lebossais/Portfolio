import { Component, ElementRef, AfterViewInit, Renderer2  } from '@angular/core';
import * as AOS from 'aos';
import {NgOptimizedImage} from "@angular/common";
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
/*
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
  */

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    AOS.init();
  }

  ngAfterViewInit() {
    const timelineItems: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.timeline-item');
    const progressBars: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.progress');

    const fillProgressBars = () => {
      progressBars.forEach((progress) => {
        const value = progress.getAttribute('data-value');
        this.renderer.setStyle(progress, 'width', `${value}%`);
      });
    };

    const checkScroll = () => {
      const triggerBottom = window.innerHeight / 5 * 4;

      timelineItems.forEach((item: HTMLElement) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
          this.renderer.addClass(item, 'visible'); // Ajoute la classe visible pour l'animation de défilement
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

    // Lancer l'animation si déjà visible
    checkScroll();
  }


}
