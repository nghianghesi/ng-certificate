import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ZipcodeChangeEvent, ZipCodesService } from '../zip-codes.service';

@Component({
  selector: 'zip-code-selector',
  templateUrl: './zip-code-selector.component.html',
  styleUrls: ['./zip-code-selector.component.css']
})
export class ZipCodeSelectorComponent implements OnInit {
  private weathers : object[] = [];
  private zipcodeCandidate : number | '' = 0;
  constructor(
    private zipCodesService: ZipCodesService, 
    private weatherService : WeatherService) 
  {     
  }

  ngOnInit(): void {
    let zipcodes = this.zipCodesService.GetZipcodes();
    for (let zip of zipcodes){
      this.LoadWeatherForZipCode(zip);
    }
    this.zipCodesService.onChange.subscribe((evt) => this.onZipCodesChanged(evt));
  }

  AddZipcodeCommand()
  {
    if (this.zipcodeCandidate != '' && !this.weathers[this.zipcodeCandidate]){
      this.zipCodesService.AddZipcode(this.zipcodeCandidate);
    }
  }  
  
  RemoveZipcodeCommand(zipcode: number)
  {
    if (this.weathers[zipcode]){
      this.zipCodesService.AddZipcode(zipcode);
    }
  }

  onZipCodesChanged(evt : ZipcodeChangeEvent)
  {
    if (evt.action == 'Added' && !this.weathers[evt.zipcode])
    {      
      this.LoadWeatherForZipCode(evt.zipcode);
    }
    else if (evt.action == 'Removed')
    {      
      delete this.weathers[evt.zipcode];
    }
  }

  private LoadWeatherForZipCode(zip : number){
    this.weatherService.GetWeatherByZipcode(zip)?.subscribe((weatherInfo) => {
      this.weathers[zip] = weatherInfo;
    })
  }
}
