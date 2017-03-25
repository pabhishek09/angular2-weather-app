import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { Routing } from './app.routing';

import { AppComponent }  from './app.component';
import { LandingPageComponent } from './LandingPage/landing-page.component';

import { WeatherService } from './Services/WeatherService/weather.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    Routing,
    HttpModule
     ],
  declarations: [ AppComponent, LandingPageComponent ],
  providers: [ WeatherService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
