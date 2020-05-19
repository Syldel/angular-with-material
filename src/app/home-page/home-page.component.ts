import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  public apiUrl: string = environment.apiUrl;

  @ViewChild('footerContainer', { read: ViewContainerRef })
  private footerViewContainerRef: ViewContainerRef;

  constructor(
    private cfr: ComponentFactoryResolver
  ) {
    // console.log('HomePageComponent apiUrl:', this.apiUrl);
  }

  ngOnInit(): void { }

  loadFooter() {
    this.getLazyFooter();
  }

  async getLazyFooter() {
    // DOCUMENTATION : https://brianflove.com/2019-12-13/lazy-load-angular-v9-components/
    if (this.footerViewContainerRef) {
      this.footerViewContainerRef.clear();
      const { MainFooterComponent } = await import('../main-footer/main-footer.component');
      this.footerViewContainerRef.createComponent(
        this.cfr.resolveComponentFactory(MainFooterComponent)
      );
    }
  }
}
