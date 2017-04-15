import { Component, OnInit } from '@angular/core';
import {  WeatherService } from './Services/WeatherService/weather.service';

@Component({
  selector: 'app-root',
  template: `
      <div class="container">
        <search-weather></search-weather>
        <h1>Landing page</h1>
      </div>
             `
})
export class AppComponent  {


  constructor(private WeatherService: WeatherService) {}
  cityDetails: any;
  weatherDetails: any;

  ngOnInit(): void {
    this.WeatherService.getWeatherDetails()
    .subscribe((weatherData) => {
        this.cityDetails = weatherData['city'];
        this.weatherDetails = this.WeatherService.formatWeatherData(weatherData['list']);
        console.log(this.weatherDetails);
      },
      (err) => {console.log(err)});
  }
}
