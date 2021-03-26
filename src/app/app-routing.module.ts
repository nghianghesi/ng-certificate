import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZipCodeSelectorComponent } from './zip-code-selector/zip-code-selector.component';
import { ZipCodeWeatherComponent } from './zip-code-weather/zip-code-weather.component';

const routes: Routes = [
  { path: 'forcast/:zipcode', component: ZipCodeWeatherComponent },
  { path: 'forcast', component: ZipCodeSelectorComponent },
  { path: '', component: ZipCodeSelectorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
