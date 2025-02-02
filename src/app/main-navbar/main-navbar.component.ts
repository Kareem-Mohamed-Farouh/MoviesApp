import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-main-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.css',
})
export class MainNavbarComponent {
  //event component
  // @HostListener('click', ['$event']) onclick(e: PointerEvent) {
  //   console.log(e);
  // }

  //global object
  scroll: boolean = false;
  @HostListener('window:scroll') onScroll() {
    console.log('hello');
    if (scrollY > 0) {
    this.scroll = true; 
  } else {
      this.scroll = false; 
    }
  }
}
