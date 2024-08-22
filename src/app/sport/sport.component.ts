import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';
import { NewsapiService } from '../newsapi.service';
import { LoadingBarService } from '@ngx-loading-bar/core';


@Component({
  selector: 'app-sport',
  standalone: true,
  imports: [AppComponent,CommonModule,RouterOutlet,RouterLink],
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css'
})
export class SportComponent {
  constructor(private service:NewsapiService ) { }

  sportNewsDisplay:any=[];
  
  ngOnInit() {
    this.service.sportNews().subscribe((data)=>{
      this.sportNewsDisplay=data.articles;
    })    
  }
}
