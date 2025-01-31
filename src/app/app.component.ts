import { Component, inject, Inject, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { MovieDataService } from './services/movie-data.service';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainNavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
 

  title = 'Movies';
}
