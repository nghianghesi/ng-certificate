import { Pipe, PipeTransform } from '@angular/core';
import { AppConfigService } from '../services/app-config.service';

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIconPipe implements PipeTransform {
  constructor(private appConfig : AppConfigService)
  {
  }
  transform(value: string, ...args: unknown[]): string {
    value = value.toLowerCase().trim();
    if (value == 'clear')
    {
      value='sun';
    } else if (value == "mist"){
      value = 'clouds';
    }
    return `${this.appConfig.WeatherApi.IconBasePath}${value}.png`;
  }
}
