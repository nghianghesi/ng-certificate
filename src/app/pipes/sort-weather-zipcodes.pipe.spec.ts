import { SortWeatherZipcodesPipe } from './sort-weather-zipcodes.pipe';

describe('WeatherZipcodesPipe', () => {
  it('create an instance', () => {
    const pipe = new SortWeatherZipcodesPipe();
    expect(pipe).toBeTruthy();
  });  
});
