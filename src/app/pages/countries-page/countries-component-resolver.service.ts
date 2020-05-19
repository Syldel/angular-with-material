import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Data } from '@angular/router';
import { Observable, of, timer, Observer } from 'rxjs';
import { takeUntil, catchError } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CountriesComponentResolverService implements Resolve<any> {
  constructor(
    private service: ApiService,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  public resolve(
    route: ActivatedRouteSnapshot
  ): Observable<any> {

    const countryCode = route.paramMap.get('id');

    let functionName = 'getCountry';
    if (!countryCode) {
      functionName = 'getCountries';
    }

    if (isPlatformBrowser(this.platformId)) {
      return this.service[functionName](countryCode).pipe(
        catchError(error => of(error))
      );
    }

    const watchdog: Observable<number> = timer(500);

    return new Observable(observer => {
      this.service[functionName](countryCode)
        .pipe(takeUntil(watchdog), catchError(error => of(error)))
        .subscribe(response => {
          observer.next(response);
          observer.complete();
        });
      watchdog.subscribe(() => {
        observer.next(null);
        observer.complete();
      });
    });
  }
}
