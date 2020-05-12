import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  public breakpoint: number;
  public apiUrl: string = environment.apiUrl;

  constructor() {
    console.log('HomePageComponent apiUrl:', this.apiUrl);
  }

  ngOnInit(): void {
    // TODO : It will be better to use CSS media queries...
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
  }

  onResize(event) {
    // TODO : It will be better to use CSS media queries...
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }
}
