import { Component, Output, EventEmitter, OnInit, OnDestroy, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { WeatherService } from '../WeatherService/weather.service';
import { AutoCompleteComponent } from './autocomplete.component';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'search-weather',
    template: `
    <div class="row search-form" [formGroup]="searchForm">
        <input type="text" class="form-control" placeholder="Search weather for" formControlName="city">
        <ng-template #autocompleteTemplate></ng-template>
    </div>
            `,
    styles: [`
    .search-form {
        position: relative;
    }
    `]
})
export class SearchWeatherComponent implements OnInit, OnDestroy {

    searchForm: FormGroup;
    autocompleteRef: any;
    componentRef: ComponentRef<AutoCompleteComponent>;
    factory: ComponentFactory<AutoCompleteComponent>;
    @ViewChild("autocompleteTemplate", { read: ViewContainerRef }) container;
    @Output() getCityDetails: EventEmitter<number> = new EventEmitter<number>();

    constructor(private weatherService: WeatherService, private resolver: ComponentFactoryResolver) {}

    ngOnInit() {
        this.searchForm = new FormGroup({
            city: new FormControl('')
        });

        this.searchForm.get('city').valueChanges
        .debounceTime(500)
        .distinctUntilChanged()
        .subscribe((res) => {
            if ((res)&&(res.length>2)) {
                this.createComponent(this.weatherService.getCitySuggestions(res));
            }
        });
    }

    ngOnDestroy() {
        this.componentRef.destroy();
    }

    createComponent(cityData) {
        this.container.clear(); 
        this.factory = this.resolver.resolveComponentFactory(AutoCompleteComponent);
        this.componentRef = this.container.createComponent(this.factory);
        this.componentRef.instance.cityList = cityData;
        this.componentRef.instance.onSelect.subscribe(event => {
            console.log(event);
            this.container.clear();
            this.getCityDetails.emit(event);
        });
    }
}
