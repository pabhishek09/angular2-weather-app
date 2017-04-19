import { Component, OnInit } from '@angular/core';
import {  WeatherService } from './WeatherService/weather.service';

@Component({
  selector: 'app-root',
  template: `
      <div class="container">
        <search-weather (getCityDetails)="getWeatherById($event)"></search-weather>
        <weather-display [weatherDetails]="weatherDetails" [cityDetails]="cityDetails"></weather-display>
      </div>
             `,
  styles: [
    `
    `
  ]
})
export class AppComponent {

  constructor(private WeatherService: WeatherService) {}

  cityDetails: any;
  weatherDetails: any;

  ngOnInit(): void {
    this.getWeatherById(1275004);
  }

  getWeatherById(event) {
    let cityId = event;
    this.WeatherService.getWeatherDetails(cityId)
    .subscribe((weatherData) => {
        this.cityDetails = weatherData['city'];
        console.log(this.cityDetails);
        this.weatherDetails = this.WeatherService.formatWeatherData(weatherData['list']);
        console.log(this.weatherDetails);
    },
    (err) => {console.log(err)});
  }
}
