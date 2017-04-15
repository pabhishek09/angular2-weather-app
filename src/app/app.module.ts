import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { AppComponent }  from './app.component';
import { SearchWeatherComponent } from './SearchWeather/search-weather.component';
import { AutoCompleteComponent } from './SearchWeather/autocomplete.component';
import { WeatherDisplayComponent } from './WeatherDisplayComponent/weather-display.component';
import { WeatherPanelComponent } from './WeatherDisplayComponent/WeatherBasePanel/weather-panel.component';
import { WeatherTileComponent } from './WeatherDisplayComponent/WeatherBasePanel/WeatherTiles/weather-tile.component';
import { WeatherService } from './WeatherService/weather.service';
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
        AutoCompleteComponent,
        WeatherDisplayComponent,
        WeatherPanelComponent,
        WeatherTileComponent
        ],
  entryComponents: [ AutoCompleteComponent ],
  providers: [
    DatePipe,
    WeatherService
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
