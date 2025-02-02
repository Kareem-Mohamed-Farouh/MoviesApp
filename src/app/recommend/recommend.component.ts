import { MovieDataService } from './../services/movie-data.service';
import { Component, inject } from '@angular/core';
import { IMovie } from '../model/imovie';
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: 'app-recommend',
  imports: [SliderComponent],
  templateUrl: './recommend.component.html',
  styleUrl: './recommend.component.css',
})
export class RecommendComponent {
  Data!: IMovie[];
  private readonly movieDataService = inject(MovieDataService);
  getData() {
    this.movieDataService.getMovieData().subscribe({
      next: (res) => {
        console.log(res);
        // let data = res;
        this.Data = res.results;
      },

      error: (err) => {
        console.log('Error', err);
      },
      complete: () => {
        console.log('%c all Data Gat BelSalama', 'color:red');
      },
    });
  }

  //  private readonly movieDataService = inject(MovieDataService);
  //   getMovieData() {
  //     this.movieDataService.getMovieData().subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         // let data = res;
  //         this.movieData = res.results;
  //       },

  //       error: (err) => {
  //         console.log('Error', err);
  //       },
  //       complete: () => {
  //         console.log('%c all Data Gat BelSalama', 'color:red');
  //       },
  //     });
  //   }
  ngOnInit(): void {
    this.getData();
  }
}
