import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherService {

    private weatherApiUrl:string = 'http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=639a252c28027f1a9a5acdf1c4d504ca';
    
    constructor(private http: Http) {}

    getWeatherDetails() {
        return this.http.get(this.weatherApiUrl)
        .map((res) => {return res.json()})
        .catch((err) => {return err.json().error || JSON.stringify(err.json())});
    }
}
