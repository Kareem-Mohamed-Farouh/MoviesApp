import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RapidMovieService {
  constructor(private readonly httpClient: HttpClient) {}
  getRapidMovie(): Observable<any> {
    return this.httpClient.get('https://fakestoreapi.com/products');

    //   return this.httpClient.get<any>(
    //     'https://imdb236.p.rapidapi.com/imdb/tt7631058/cast',
    //     {
    // 	'x-rapidapi-key': 'c0c5f05affmsh4e99cd0942ebaf4p19837cjsn6f8b4794507b',
    // 	'x-rapidapi-host': 'imdb236.p.rapidapi.com'
    // }
    //   );
  }
}
