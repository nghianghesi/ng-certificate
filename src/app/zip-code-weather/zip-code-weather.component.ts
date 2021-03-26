import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherForecastInformation, WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-zip-code-weather',
  templateUrl: './zip-code-weather.component.html',
  styleUrls: ['./zip-code-weather.component.css']
})
export class ZipCodeWeatherComponent implements OnInit {

  private zipcode : string = '';
  forecast : (WeatherForecastInformation | null) = null;
  constructor(private weatherService : WeatherService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.zipcode = params['zipcode'];
      this.weatherService.Get5DaysWeatherByZipcode(this.zipcode)?.subscribe(weathers => this.forecast = weathers);
    });
  }
}
