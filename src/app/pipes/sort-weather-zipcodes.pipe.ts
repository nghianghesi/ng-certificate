import { Pipe, PipeTransform } from '@angular/core';
import { WeatherInfomation } from '../services/weather.service';

@Pipe({
  name: 'sortWeatherZipcodes'
})

export class SortWeatherZipcodesPipe implements PipeTransform {
  transform(value: {key:string, value:WeatherInfomation}[], ...args: unknown[]): {key:string, value:WeatherInfomation}[] {
    return (value as any[]).sort((a,b) => a.value.name?.localeCompare(b.value.name || '') || -1);
  }
}
