import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { City } from './city';
import { Observable } from 'rxjs/Rx';
import { DatePipe } from '@angular/common'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherService {

    private baseUrl = "http://api.openweathermap.org/data/2.5/forecast";
    private appKey = "639a252c28027f1a9a5acdf1c4d504ca";
    private cityList: Array<City>;
    constructor(private http: Http, private datePipe: DatePipe) {
        this.getCityData();
    }

    getWeatherDetails(_id) {
        let params = new URLSearchParams();
        params.set('id', _id);
        params.set('APPID', this.appKey);
        return this.http.get(this.baseUrl, {search: params})
        .map((res) => {
             let data = res.json();
             return res.json();})
        .catch((err) => {return err});
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

    getCityData() {
        this.http.get('./src/assets/city.list.json')
        .subscribe((res) => {
            this.cityList = res.json();
        },(err)=> {console.log(err)})
    }

    getCitySuggestions(queryCity: string) {
        return this.searchCityList(queryCity);
    }

    searchCityList(term: string) {
        console.log('Finding suggestions for', term);
        return this.cityList.filter((_city) => {
            return term.toLocaleLowerCase() === _city.name.substr(0, term.length).toLocaleLowerCase();
        });
    }
}
