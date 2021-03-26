import { TestBed } from '@angular/core/testing';
import { WeatherIconPipe } from './weather-icon.pipe';

describe('WeatherIconPipe', () => {
  it('create an instance', () => {    
    TestBed.configureTestingModule({});
    const pipe = TestBed.inject(WeatherIconPipe);;
    expect(pipe).toBeTruthy();
  });
});
