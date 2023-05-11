import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WetherData } from '../model/wether.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WetherserviceService {
  constructor(private http: HttpClient ) { }

  getWeather(cityName: string): Observable<WetherData>{
    return this.http.get<WetherData>('https://open-weather13.p.rapidapi.com/city/'+cityName,{
      headers: new HttpHeaders()
      .set('X-RapidAPI-Host','open-weather13.p.rapidapi.com')
      .set('X-RapidAPI-Key','e7671f93f0msh61e199e60f76f0cp132361jsn22d489f55333'),

      
      // params: new HttpParams()
      // .set('q',cityName)
      // .set('units','metric')
      // .set('mode','json')
    });
  }
}






  // wetherApiBaseUrl: 'https://open-weather-map27.p.rapidapi.com/weather',
  // XRapidAPIHostHederName: 'X-RapidAPI-Host',
  // XRapidAPIHostHederValue: 'open-weather-map27.p.rapidapi.com/weather',
  // XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  // XRapidAPIKeyHeaderValue:'e7671f93f0msh61e199e60f76f0cp132361jsn22d489f55333'

  // return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=YOUR_API_KEY_HERE`);
