import { EventEmitter } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class ZipCodesService {

  static readonly ZIPCODE_STORAGE_KEY = "WEATHER-ZIPCODES";

  onChange = new EventEmitter<ZipcodeChangeEvent>();
  private zipcodes : any = {};

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService)
  { 
    try {
      this.zipcodes = JSON.parse(this.storage.get(ZipCodesService.ZIPCODE_STORAGE_KEY)) || {};
    }
    catch(e) {
      this.zipcodes = {};
    }
    this.zipcodes = {};
  }

  public GetZipcodes() : Readonly<string[]>
  {
    return Object.keys(this.zipcodes);
  }  
  
  public AddZipcode(zipcode: string) 
  {
    if (typeof(this.zipcodes[zipcode]) == 'undefined')
    {
      this.zipcodes[zipcode] = '';
      this.storage.set(ZipCodesService.ZIPCODE_STORAGE_KEY, JSON.stringify(this.zipcodes));
      this.onChange.emit({zipcode: zipcode, action:'Added'});
    }
  }  
  
  public RemoveZipcode(zipcode: string) 
  {
    if (typeof(this.zipcodes[zipcode]) != 'undefined')
    {      
      delete this.zipcodes[zipcode];
      this.storage.set(ZipCodesService.ZIPCODE_STORAGE_KEY, JSON.stringify(this.zipcodes));
      this.onChange.emit({zipcode: zipcode, action:'Removed'});
    }
  }
}

export interface ZipcodeChangeEvent {
  zipcode: string;
  action: ('Added' | 'Removed');
}
