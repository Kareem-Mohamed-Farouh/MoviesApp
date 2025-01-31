import { Component, inject } from '@angular/core';
import { MovieDataService } from '../services/movie-data.service';
import { IMovie } from '../model/imovie';
import { ResposnerComponent } from '../resposner/resposner.component';

@Component({
  selector: 'app-the-best',
  imports: [ResposnerComponent],
  templateUrl: './the-best.component.html',
  styleUrl: './the-best.component.css',
})
export class TheBestComponent {
  movieData: IMovie[] = [];

  private readonly movieDataService = inject(MovieDataService);
  getMovieData() {
    this.movieDataService.getMovieData().subscribe({
      next: (res) => {
        console.log(res);
        // let data = res;
        this.movieData = res.results;
      },

      error: (err) => {
        console.log('Error', err);
      },
      complete: () => {
        console.log('%c all Data Gat BelSalama', 'color:red');
      },
    });
  }
  ngOnInit(): void {
    this.getMovieData();
  }
}
