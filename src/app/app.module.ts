import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'ngx-moment';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    StorageServiceModule,
    HttpClientModule,
    NgbModule,
    MomentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
