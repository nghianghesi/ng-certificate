import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZipCodeSelectorComponent } from './zip-code-selector/zip-code-selector.component';
import { ZipCodeWeatherComponent } from './zip-code-weather/zip-code-weather.component';
import { WeatherIconPipe } from './pipes/weather-icon.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';


import { WeatherService } from './services/weather.service';
import { ZipCodesService } from './services/zip-codes.service';
import { AppConfigService } from './services/app-config.service';

@NgModule({
  declarations: [
    AppComponent,
    ZipCodeSelectorComponent,
    ZipCodeWeatherComponent,
    WeatherIconPipe,
    TemperaturePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    StorageServiceModule,
    HttpClientModule
  ],
  providers: [AppConfigService, WeatherService, ZipCodesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
