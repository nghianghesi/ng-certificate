import { EventEmitter } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class ZipCodesService {

  static readonly ZIPCODE_STORAGE_KEY = "WEATHER-ZIPCODES";

  onChange = new EventEmitter<ZipcodeChangeEvent>();
  private zipcodes : number[] = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService)
  { 
     this.zipcodes = JSON.parse(this.storage.get(ZipCodesService.ZIPCODE_STORAGE_KEY)) || [];

  }

  public GetZipcodes() : Readonly<number[]>
  {
    return this.zipcodes;
  }  
  
  public AddZipcode(zipcode: number) 
  {
    if (this.zipcodes.indexOf(zipcode) < 0)
    {
      this.zipcodes.push(zipcode);
      this.storage.set(ZipCodesService.ZIPCODE_STORAGE_KEY, JSON.stringify(this.zipcodes));
      this.onChange.emit({zipcode: zipcode, action:'Added'});
    }
  }  
  
  public RemoveZipcode(zipcode: number) 
  {
    if (this.zipcodes.indexOf(zipcode) < 0)
    {
      this.zipcodes.push(zipcode);
      this.storage.set(ZipCodesService.ZIPCODE_STORAGE_KEY, JSON.stringify(this.zipcodes));
      this.onChange.emit({zipcode: zipcode, action:'Removed'});
    }
  }
}

export interface ZipcodeChangeEvent {
  zipcode: number;
  action: ('Added' | 'Removed');
}
