import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-gaming',
  standalone: true,
  imports: [AppComponent,CommonModule,RouterOutlet,RouterLink],
  templateUrl: './gaming.component.html',
  styleUrl: './gaming.component.css'
})
export class GamingComponent {
  constructor(private service:NewsapiService ) { }

  gamingNewsDisplay:any=[];
  
  ngOnInit() {
    this.service.gamingNews().subscribe((data)=>{
      this.gamingNewsDisplay=data.articles;
    })    
  }
}
