import { Component, OnInit } from '@angular/core';
import {  WeatherService } from './Services/WeatherService/weather.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './app.component.html'
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
          console.log(this.cityDetails);
          console.log(this.weatherDetails);
      },
      (err) => {console.log(err)});
  }
}
