import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  constructor(private http: HttpClient) {}

  displayNews(page: number = 0, pageSize: number = 10): Observable<any> {
    const newsApiUrl = `https://newsapi.org/v2/everything?q=headlines&page=${
      page + 1
    }&pageSize=${pageSize}&apiKey=b0afa679a8b54a3096c1538f458154de`;
    return this.http.get(newsApiUrl);
  }
  sportNews(page: number = 0, pageSize: number = 10): Observable<any> {
    const sportnewsApiUrl = `https://newsapi.org/v2/everything?q=sports&page=${
      page + 1
    }&pageSize=${pageSize}&apiKey=b0afa679a8b54a3096c1538f458154de`;
    return this.http.get(sportnewsApiUrl);
  }
  gamingNews(page: number = 0, pageSize: number = 10): Observable<any> {
    const gamingnewsApiUrl = `https://newsapi.org/v2/everything?q=gaming&page=${
      page + 1
    }&pageSize=${pageSize}&apiKey=b0afa679a8b54a3096c1538f458154de`;
    return this.http.get(gamingnewsApiUrl);
  }

  getSearchNews(search: string): Observable<any> {
    return this.http.get(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=b0afa679a8b54a3096c1538f458154de`
    );
  }
}
