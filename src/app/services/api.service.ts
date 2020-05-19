import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getCountries(): Observable<any> {
    return this.httpClient.get<any>(`https://restcountries.eu/rest/v2/all`);
  }

  public getCountry(code: string): Observable<any> {
    return this.httpClient.get<any>(`https://restcountries.eu/rest/v2/alpha/${code}`);
  }
}
