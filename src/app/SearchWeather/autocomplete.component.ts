import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'autocomplete',
    template: `
        <ul class="dropdown-menu">
            <li><a *ngFor="let city of autoCompleteCityList">{{city.name}}</a></li>
        </ul>
               `
})
export class AutoCompleteComponent implements OnChanges{
    
    autoCompleteCityList: any;
    @Input() cityList: any;

    ngOnChanges(changes: SimpleChanges) {
        let cityListData = changes['cityList'].currentValue;
        if ((changes['cityList']) && (cityListData)) {
            if(cityListData.length>0) {
                this.autoCompleteCityList = cityListData;
                console.log(this.autoCompleteCityList);
            }
            else {
                console.log('no match found');
            }
        }
    }
}
