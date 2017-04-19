import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'autocomplete',
    template: `
        <ul class="autocomplete-list list-group">
            <li class="list-group-item" *ngFor="let city of cityList" (click)="onClick(city._id)"><a>{{city.name}}</a></li>
        </ul>
               `,
        styles: [
            `
            .autocomplete-list {
                position: absolute;
                z-index: 10;
                width: 100%;
            }
            .autocomplete-list>li {
                cursor: pointer;
                background-color: #BCF2FF;
                border: 1px solid #fff;
            }
            .autocomplete-list>li:first-child {
                border-top: none;
            }
            .autocomplete-list>li>a {
                color: #000;
            }
            `
        ]
})
export class AutoCompleteComponent{
    
    autoCompleteCityList: any;
    @Input() cityList: any;
    @Output() onSelect: EventEmitter<number> = new EventEmitter<number>();

    onClick(cityId) {
        this.onSelect.emit(cityId);
    }
}
