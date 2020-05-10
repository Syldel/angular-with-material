import { Component, OnInit,  } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-project';

  public breakpoint: number;
  public apiUrl: string = environment.apiUrl;

  constructor() {
    console.log('AppComponent environment.apiUrl:', environment.apiUrl);
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }
}
