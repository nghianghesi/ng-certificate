import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number | undefined, destUnit : string = 'F', sourceUnit : string = '', ...args: unknown[]): string {
    if (typeof(value) == "undefined"){
      return '';
    }

    if (!sourceUnit || sourceUnit == 'Kelvin')
    {
      if (destUnit == 'F' || destUnit == "Fahrenheit")
      {
        return `${Math.floor(value * 1.8 - 459.67)}°F`;
      }
      if (destUnit == 'C' || destUnit == "Celsius")
      {
        return `${Math.floor(value - 273.15)}°C`;
      }
      return `${value}°K`;
    }
    return `${value}°K`;
  }

}
