import { Component, inject } from '@angular/core';
import { RapidMovieService } from '../services/rapid-movie.service';
import { IProduct } from '../model/rabid-api';

@Component({
  selector: 'app-recommend',
  imports: [],
  templateUrl: './recommend.component.html',
  styleUrl: './recommend.component.css',
})
export class RecommendComponent {
  Data!: IProduct[];
  private readonly rapidMovieService = inject(RapidMovieService);
  getrapidData() {
    this.rapidMovieService.getRapidMovie().subscribe({
      next: (res) => {
        console.log(res);
        // let data = res;
        this.Data = res;
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
    this.getrapidData();
  }
}
