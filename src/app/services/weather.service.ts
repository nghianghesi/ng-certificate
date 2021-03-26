import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { take } from 'rxjs/operators';  

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private config : any;
  constructor(private appConfigService: AppConfigService, private http : HttpClient ) { 
    this.config = this.appConfigService.WeatherApi;
  }

  public GetWeatherByZipcode(zipcode: number) {
    if (zipcode > 0)
    {
      let url : string = `${this.config.Endpoint}/weather?zip=${zipcode}&appid=${this.config.ApiKey}`;
      return this.http.get(url);
    }
    
    return null;
  }  
  
  public Get5DaysWeatherByZipcode(zipcode: number) {
    if (zipcode > 0)
    {
      let url : string = `${this.config.Endpoint}/forecast/daily?zip=${zipcode}&appid=${this.config.ApiKey}`;
      return this.http.get(url).pipe(take(5));
    }
    return null;
  }
}
