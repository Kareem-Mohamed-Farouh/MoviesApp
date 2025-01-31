import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TheBestComponent } from './the-best/the-best.component';
import { RecommendComponent } from './recommend/recommend.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFaoudComponent } from './not-faoud/not-faoud.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'TheBest', component: TheBestComponent, title: 'TheBest' },
  { path: 'Recommended', component: RecommendComponent, title: 'Recommended' },
  { path: 'About', component: AboutComponent, title: 'About' },
  { path: 'Contact', component: ContactComponent, title: 'Contact' },
  { path: '**', component: NotFaoudComponent, title: 'NotFaoud' },
];
