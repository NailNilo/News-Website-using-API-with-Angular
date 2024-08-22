import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { NewsapiService } from '../newsapi.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [AppComponent,CommonModule,RouterOutlet,RouterLink],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent {

constructor(private service:NewsapiService ) { }

NewsDisplay:any=[];

ngOnInit() {
  this.service.displayNews().subscribe((data)=>{
    this.NewsDisplay=data.articles;
  })    
}

}
