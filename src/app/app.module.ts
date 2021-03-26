import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZipCodeSelectorComponent } from './zip-code-selector/zip-code-selector.component';
import { ZipCodeWeatherComponent } from './zip-code-weather/zip-code-weather.component';
import { WeatherIconPipe } from './pipes/weather-icon.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
