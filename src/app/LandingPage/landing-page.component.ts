import { Component, OnInit } from '@angular/core';
import {  WeatherService } from '../Services/WeatherService/weather.service';

@Component({
    moduleId: module.id,
    selector: 'landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css'],
    providers: []
})
export class LandingPageComponent implements OnInit {

    title: string = 'Landing page';
    weatherDetails: any;

    constructor(private WeatherService: WeatherService) {}

    ngOnInit(): void {
        this.WeatherService.getWeatherDetails()
        .subscribe((weatherData) => {this.weatherDetails = weatherData; console.log(weatherData)},
                   (err) => {console.log(err)});
    }
}
