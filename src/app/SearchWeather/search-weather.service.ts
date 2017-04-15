import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { City } from './city';

Injectable()
export class SearchWeatherService {

    constructor() {
        // this.getCityData();
    }

    private cityList: Array<City> = [
        {"_id":7280714,"name":"Colonia Roma","country":"MX","coord":{"lon":-99.163048,"lat":19.41819}},
        {"_id":1006919,"name":"Ebenhaezer","country":"ZA","coord":{"lon":28.283331,"lat":-28.383329}},
        {"_id":2755862,"name":"Fort","country":"NL","coord":{"lon":6.38611,"lat":52.651669}},
        {"_id":3463909,"name":"Estaca","country":"BR","coord":{"lon":-54.533329,"lat":-20.299999}},
        {"_id":2950908,"name":"Benzhausen","country":"DE","coord":{"lon":7.81667,"lat":48.049999}},
        {"_id":2757698,"name":"Dedemsvaart","country":"NL","coord":{"lon":6.45833,"lat":52.599998}},
        {"_id":5972930,"name":"Hazlet","country":"CA","coord":{"lon":-108.60141,"lat":50.400082}},
        {"_id":2900248,"name":"Holsterhausen","country":"DE","coord":{"lon":7.18333,"lat":51.533329}},
        {"_id":2932029,"name":"Eickel","country":"DE","coord":{"lon":7.18333,"lat":51.51667}},
        {"_id":2784102,"name":"Wanne","country":"BE","coord":{"lon":5.92083,"lat":50.355}},
        {"_id":2643273,"name":"Lytham","country":"GB","coord":{"lon":-2.96293,"lat":53.73695}},
        {"_id":5908999,"name":"Bristol","country":"CA","coord":{"lon":-76.466103,"lat":45.533409}},
    ];

    getCityData() {
        // this.http.get('./city.json')
        // .subscribe((res) => {console.log(res)},(err)=> {console.log(err)})
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
