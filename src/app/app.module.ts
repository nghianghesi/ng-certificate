import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StorageServiceModule} from 'angular-webstorage-service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZipCodeSelectorComponent } from './zip-code-selector/zip-code-selector.component';
import { ZipCodeWeatherComponent } from './zip-code-weather/zip-code-weather.component';
import { WeatherIconPipe } from './weather-icon.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ZipCodeSelectorComponent,
    ZipCodeWeatherComponent,
    WeatherIconPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
