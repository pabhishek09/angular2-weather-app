import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'weather-display',
    templateUrl: './weather-display.component.html'
})
export class WeatherDisplayComponent{

    @Input() weatherDetails: any;
    @Input() cityDetails: any;

}
