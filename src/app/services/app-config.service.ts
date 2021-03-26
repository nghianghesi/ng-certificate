import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  readonly WeatherApi = {
    ApiKey : '5a4b2d457ecbef9eb2a71e480b947604',
    BaseEndpoint : 'http://api.openweathermap.org/data/2.5/',
    IconBasePath : 'https://www.angulartraining.com/images/weather/'
  }
  
  constructor() { }
}
