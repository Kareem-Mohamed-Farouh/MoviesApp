import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../model/imovie';





@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  constructor(private readonly httpClient: HttpClient) {}

  getMovieData(): Observable<IMovie> {
    return this.httpClient.get<IMovie>(
      'https://api.themoviedb.org/3/trending/all/day?api_key=866cd3a065ef9304a549f1d65e494940'
    );
  }
}
