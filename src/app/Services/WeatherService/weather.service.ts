import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { DatePipe } from '@angular/common'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherService {

    private weatherApiUrl:string = 'http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=639a252c28027f1a9a5acdf1c4d504ca';
    
    constructor(private http: Http, private datePipe: DatePipe) {}

    getWeatherDetails() {

        return this.http.get(this.weatherApiUrl)
        .map((res) => {
             let data = res.json();
             return res.json();})
        .catch((err) => {return err.json().error || JSON.stringify(err.json())});

    }

    formatWeatherData(weatherData: any) {

      let dateObject: any= {};

      if (weatherData && weatherData.length>0) {
        weatherData.forEach((forecast: any) => {

            let utcDate = forecast.dt*1000;

            forecast['date'] = this.datePipe.transform(utcDate, 'yyyy-MM-dd');
            if(!dateObject[forecast.date]) {
                dateObject[forecast.date] = [];
            }
            dateObject[forecast.date].push(forecast);
        });
      }

        let dateSortedData: any = [];
        for(let date in dateObject) {
            dateSortedData.push(dateObject[date]);
        }
        
        return dateSortedData;
     }
}
