import { Pipe, PipeTransform } from '@angular/core';
import { AppConfigService } from '../services/app-config.service';

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIconPipe implements PipeTransform {
  constructor(private appConfig : AppConfigService)
  {
  }
  transform(value: any, ...args: unknown[]): string {
    return `${this.appConfig.WeatherApi.IconBasePath}${value}.png`;
  }
}
