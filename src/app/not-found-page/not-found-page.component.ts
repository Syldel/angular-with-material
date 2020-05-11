import { Component, OnInit, Inject, Optional, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
// import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.sass']
})
export class NotFoundPageComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: object,
    // @Optional() @Inject(RESPONSE) private response: any
  ) { }

  ngOnInit() {
    this.title.setTitle('Page not found!');
    this.meta.updateTag({
      name: 'description',
      content: 'Sorry, this page can\'t be found.'
    });

    // if (isPlatformServer(this.platformId) && this.response) {
    //  this.response.statusCode = 404;
    //  this.response.statusMessage = 'Page Not Found';
    // }
  }

}
