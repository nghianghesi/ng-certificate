import { Component, OnInit } from '@angular/core';
import { WeatherInfomation, WeatherService } from '../services/weather.service';
import { ZipcodeChangeEvent, ZipCodesService } from '../services/zip-codes.service';

@Component({
  selector: 'zip-code-selector',
  templateUrl: './zip-code-selector.component.html',
  styleUrls: ['./zip-code-selector.component.css']
})
export class ZipCodeSelectorComponent implements OnInit {
  private tracking : {[key:string]: ''} = {};

  weathers : {[key:string]: WeatherInfomation} = {};
  zipcodeCandidate : string = '';
  constructor(
    private zipCodesService: ZipCodesService, 
    private weatherService : WeatherService) 
  {}

  ngOnInit(): void {
    let zipcodes = this.zipCodesService.GetZipcodes();
    for (let zip of zipcodes){
      this.LoadWeatherForZipCode(zip);
    }
    this.zipCodesService.onChange.subscribe((evt) => this.onZipCodesChanged(evt));
  }

  AddZipcodeCommand()
  {
    if (this.zipcodeCandidate != ''){
      this.zipCodesService.AddZipcode(this.zipcodeCandidate);
    }
  }  
  
  RemoveZipcodeCommand(zipcode: string)
  {
    if (this.weathers[zipcode]){
      this.zipCodesService.RemoveZipcode(zipcode);
    }
  }

  onZipCodesChanged(evt : ZipcodeChangeEvent)
  {
    if (evt.action == 'Added')
    {      
      this.LoadWeatherForZipCode(evt.zipcode);
    }
    else if (evt.action == 'Removed')
    {      
      delete this.weathers[evt.zipcode];
      delete this.tracking[evt.zipcode];
    }
  }

  private LoadWeatherForZipCode(zip : string, forced = false){
    if (typeof(this.tracking[zip]) == "undefined" || forced)
    {
      this.tracking[zip] = '';
      this.weatherService.GetWeatherByZipcode(zip)?.subscribe((weatherInfo) => {
        this.weathers[zip] = weatherInfo;
      });
    }
  }
}
