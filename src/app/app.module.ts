import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { WeatherService } from './Services/WeatherService/weather.service';
import { DatePipe } from '@angular/common';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule
     ],
  declarations: [ 
        AppComponent,
        ],
  providers: [
    DatePipe, 
    WeatherService
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
