import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { MainHeaderComponent } from './main-header.component';

import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from '../app-routing.module';

describe('MainHeaderComponent', () => {
  let component: MainHeaderComponent;
  let fixture: ComponentFixture<MainHeaderComponent>;
  let compiled: HTMLElement;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHeaderComponent ],
      imports: [
        MatMenuModule,
        AppRoutingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(MainHeaderComponent);
    component = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;

    fixture.ngZone.run(() => {
      router.initialNavigation();
      router.navigate(['']);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h2 tag', () => {
    expect(compiled.querySelector('h2').textContent).toContain('Main Menu');
  });

  it('should navigate to /images', async(() => {
    fixture.ngZone.run(() => {
      fixture.whenStable().then(() => {
        router.navigate(['/images']).then(() => {
          expect(location.path()).toEqual('/images');
        });
      });
    });
  }));

  it('should navigate to /contact', async(() => {
    fixture.ngZone.run(() => {
      fixture.whenStable().then(() => {
        router.navigate(['/contact']).then(() => {
          expect(location.path()).toEqual('/contact');
        });
      });
    });
  }));

  it('should navigate to /test-404', async(() => {
    fixture.ngZone.run(() => {
      fixture.whenStable().then(() => {
        router.navigate(['/test-404']).then(() => {
          expect(location.path()).toEqual('/not-found');
        });
      });
    });
  }));

});
