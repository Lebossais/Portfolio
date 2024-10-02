import { Component, HostListener } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  previousScrollPosition = window.scrollY;
  isHeaderVisible = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.scrollY;

    if(currentScrollPosition > this.previousScrollPosition && currentScrollPosition > 100) {
      this.isHeaderVisible = false;
    } else {
      this.isHeaderVisible = true;
    }
    this.previousScrollPosition = currentScrollPosition;
  }

}
