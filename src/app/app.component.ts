import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NewsapiService } from './newsapi.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  searchForm: FormGroup = new FormGroup({
    search: new FormControl(''),
  });

  public searchList: Array<any> = [];

  constructor(private service: NewsapiService) {
    this.searchForm
      .get('search')!
      .valueChanges.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((data) => this.service.getSearchNews(data))
      )
      .subscribe((data) => {
        this.searchList = data?.articles;
      });
  }
}
