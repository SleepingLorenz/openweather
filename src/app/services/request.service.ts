import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { observable, Observable } from 'rxjs';

const apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

@Injectable({
  providedIn: 'root'
})

export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

  getWeatherData(citta:string): Observable<any> {
    citta = citta+',it'
    const httpParams = new HttpParams()
    .set('q', citta)
    .set('lang', 'it')
    .set('units', 'metric')
    .set('appid', environment.apiKey);

    console.log(httpParams);

    return this.http.get(apiUrl,{params:httpParams});
  }

}
