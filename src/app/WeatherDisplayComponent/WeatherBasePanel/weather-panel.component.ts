import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'weather-panel',
    template: `
    <ul class="list-group weather-panel">
        <weather-tile *ngFor="let tile of weatherPanelData" [tileData]="tile" (onSelectTile)="changeActiveDay($event)"></weather-tile>
    </ul>
         `,
    styles: [
        `
        .weather-panel {
            border: 1px solid #5DDFFD;
        }
        `
    ]
})
export class WeatherPanelComponent {

    @Input() weatherPanelData: any;
    @Output() displaySelectedDay: EventEmitter<any> = new EventEmitter<any>();
    changeActiveDay(event) {
        this.displaySelectedDay.emit(event);
    }
}

