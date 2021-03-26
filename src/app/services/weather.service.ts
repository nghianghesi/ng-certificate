import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config.service';
import { take, map } from 'rxjs/operators';  

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private config : any;
  constructor(private appConfigService: AppConfigService, private http : HttpClient ) { 
    this.config = this.appConfigService.WeatherApi;
  }

  public GetWeatherByZipcode(zipcode: string) {
    if (zipcode > '')
    {
      let url : string = `${this.config.BaseEndpoint}/weather`;
      return this.http.get<WeatherInfomation>(url, {params:{zip:zipcode.toString(), appid:this.config.ApiKey}});
    }
    
    return null;
  }  
  
  public Get5DaysWeatherByZipcode(zipcode: string) {
    if (zipcode > '')
    {
      let url : string = `${this.config.BaseEndpoint}/forecast/daily`;
      return this.http.get<WeatherForecastInformation>(url, {params:{zip:zipcode.toString(), appid:this.config.ApiKey}});
    }

    return null;
  }
}

export interface WeatherInfomation
{
  "coord": {
    "lon": number,
    "lat": number
  },
  "weather": {
      "id": number,
      "main": string,
      "description": string,
      "icon": string
    }[],
  "base": string,
  "main": {
    "temp": number,
    "feels_like": number,
    "temp_min": number,
    "temp_max": number,
    "pressure": number,
    "humidity": number
  },
  "visibility": number,
  "wind": {
    "speed": number,
    "deg": number
  },
  "clouds": {
    "all": number
  },
  "dt": number,
  "sys": {
    "type": number,
    "id": number,
    "message": number,
    "country": string,
    "sunrise": number,
    "sunset": number
  },
  "timezone": number,
  "id": number,
  "name": string,
  "cod": number
  }

export interface WeatherForecastInformation{
  "city": {
    "id": number,
    "name": string,
    "coord": {
      "lon": number,
      "lat": number
    },
    "country": string,
    "population": number,
    "timezone": number
  },
  "cod": string,
  "message": number,
  "cnt": number,
  list : [
    {
      "dt": number,
      "sunrise": number,
      "sunset": number,
      "temp": {
        "day": number,
        "min": number,
        "max": number,
        "night": number,
        "eve": number,
        "morn": number
      },
      "feels_like": {
        "day": number,
        "night": number,
        "eve": number,
        "morn": number
      },
      "pressure": number,
      "humidity": number,
      "weather": [
        {
          "id": number,
          "main": string,
          "description": string,
          "icon": string
        }
      ],
      "speed": number,
      "deg": number,
      "clouds": number,
      "pop": number
    }
  ]
}
