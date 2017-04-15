import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { AppComponent }  from './app.component';
import { SearchWeatherComponent } from './SearchWeather/search-weather.component';
import { AutoCompleteComponent } from './SearchWeather/autocomplete.component';
import { WeatherService } from './Services/WeatherService/weather.service';
import { SearchWeatherService } from './SearchWeather/search-weather.service';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
     ],
  declarations: [ 
        AppComponent,
        SearchWeatherComponent,
        AutoCompleteComponent
        ],
  providers: [
    DatePipe,
    SearchWeatherService, 
    WeatherService
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
