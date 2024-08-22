import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http: HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/everything?q=headlines&apiKey=6c6b7712991e4a639042593a9c2911ad"
  sportnewsApiUrl = "https://newsapi.org/v2/everything?q=sports&apiKey=6c6b7712991e4a639042593a9c2911ad"
  gamingnewsApiUrl = "https://newsapi.org/v2/everything?q=gaming&apiKey=6c6b7712991e4a639042593a9c2911ad"

  displayNews(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }
  sportNews(): Observable<any> {
    return this.http.get(this.sportnewsApiUrl);
  }
  gamingNews(): Observable<any> {
    return this.http.get(this.gamingnewsApiUrl);
  }
}
