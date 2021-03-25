import { Pipe, PipeTransform } from '@angular/core';
import { AppConfigService } from './app-config.service';

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIconPipe implements PipeTransform {
  constructor(private appConfig : AppConfigService)
  {
  }
  transform(value: unknown, ...args: unknown[]): unknown {
    return `${this.appConfig.WeatherApi.IconBasePath}${value}.png';
  }

}
