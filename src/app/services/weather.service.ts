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
      return this.http.get<WeatherInfomation>(url, {params:{zip:zipcode.toString(), appid:this.config.ApiKey}})
            .pipe(take(5), map((x)=>{x.zipcode = zipcode; return x;}));
    }

    return null;
  }
}

export interface WeatherInfomation
{
  "coord"?: {
    "lon": number,
    "lat": number
  },
  "weather": {
      "id": number,
      "main": string,
      "description": string,
      "icon": string
    }[],
  "base"?: string,
  "main"?: {
    "temp": number,
    "feels_like": number,
    "temp_min": number,
    "temp_max": number,
    "pressure": number,
    "humidity": number
  },
  "visibility"?: number,
  "wind"?: {
    "speed": number,
    "deg": number
  },
  "clouds"?: {
    "all": number
  },
  "dt"?: number,
  "sys"?: {
    "type": number,
    "id": number,
    "message": number,
    "country": string,
    "sunrise": number,
    "sunset": number
  },
  "timezone"?: number,
  "id"?: number,
  "name"?: string,
  "zipcode"?:string,
  "cod"?: number
  }    
