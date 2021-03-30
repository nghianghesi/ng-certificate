import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ZipCodeWeatherComponent } from '../zip-code-weather/zip-code-weather.component';
import { ZipCodeSelectorComponent } from '../zip-code-selector/zip-code-selector.component';
import { WeatherIconPipe } from '../pipes/weather-icon.pipe';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { SortWeatherZipcodesPipe } from '../pipes/sort-weather-zipcodes.pipe';
import { MomentModule } from 'ngx-moment';
import { FormsModule } from '@angular/forms';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppConfigService } from '../services/app-config.service';
import { WeatherService } from '../services/weather.service';
import { ZipCodesService } from '../services/zip-codes.service';

const lazy_routes: Routes = [
    { path: ':zipcode', component: ZipCodeWeatherComponent },
    { path: '', component: ZipCodeSelectorComponent }
];
@NgModule({
  declarations: [
    ZipCodeWeatherComponent,    
    WeatherIconPipe,
    TemperaturePipe,
    SortWeatherZipcodesPipe,
    ZipCodeWeatherComponent,
    ZipCodeSelectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StorageServiceModule,
    HttpClientModule,
    NgbModule,
    MomentModule,
    RouterModule.forChild(lazy_routes),
  ],
  providers: [AppConfigService, WeatherService, ZipCodesService]
})
export class LazyModule { }
