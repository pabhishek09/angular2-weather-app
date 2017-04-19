import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'weather-tile',
    templateUrl: './weather-tile.component.html',
    styles: [
        `
        .weather-tile {
            background-color: transparent;
            border: none;
            min-height: 50px;
        }
        .weather-tile:hover {
            background-color: #5DDFFD;
            color: white;
            cursor: pointer;
        }
        `
    ]
})
export class WeatherTileComponent {

    @Input() tileData: any;
    @Output() onSelectTile: EventEmitter<any> = new EventEmitter<any>();
    changeActiveDayWeather() {
        this.onSelectTile.emit(this.tileData);
    }
}

