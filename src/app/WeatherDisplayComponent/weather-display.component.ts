import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'weather-display',
    templateUrl: './weather-display.component.html',
    styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnChanges{

    selectedDayWeather: any;
    dataForWeatherPanel: any;

    @Input() weatherDetails: any;
    @Input() cityDetails: any;

    changeActiveDay(event){
        this.selectedDayWeather = event;
        console.log(this.selectedDayWeather);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.hasOwnProperty('weatherDetails')) {
            let weatherDetailsCurrentValue = changes['weatherDetails'].currentValue;
            if (weatherDetailsCurrentValue) {
                this.selectedDayWeather = weatherDetailsCurrentValue[0];
                console.log(this.selectedDayWeather);
            }
        }
    }
}
