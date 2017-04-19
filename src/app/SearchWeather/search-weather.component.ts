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
    .search-form>input {
        padding: 10px 16px;
        background: transparent;
        border: none;
        border-radius: 0;
        outline: none;
        -webkit-box-shadow: 0 0 0 0 #5DDFFD;
       -moz-box-shadow: 0 0 0 0 #5DDFFD;
        box-shadow: 0 0 0 0 #5DDFFD;
        transition: none;
        cursor: pointer;
        border-bottom: 1px solid #5DDFFD;
        -webkit-box-shadow: 0 2px 1px -1px #5DDFFD;
       -moz-box-shadow: 0 2px 1px -1px #5DDFFD;
        box-shadow: 0 2px 1px -1px #5DDFFD;
        border-bottom-radius: 4px;
    }
    .search-form>input:focus {
        background-color: #5DDFFD;
        color: white;
    }
    .search-form>input:focus::-webkit-input-placeholder{
        color: white;
    }
    .search-form>input:focus::-moz-placeholder{
        color: white;
    }
    .search-form>input:focus:-ms-input-placeholder{
        color: white;
    }
    .search-form>input:focus:-moz-placeholder{
        color: white;
    }
    .search-form>input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #000;
    }
    .search-form>input::-moz-placeholder { /* Firefox 19+ */
        color: #000;
    }
    .search-form>input:-ms-input-placeholder { /* IE 10+ */
        color: #000;
    }
    .search-form>input:-moz-placeholder { /* Firefox 18- */
        color: #000;
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
            if ((res)&&(res.length>1)) {
                this.createComponent(this.weatherService.getCitySuggestions(res));
            }
            else if(!res.length){
                this.createComponent([]);
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
        if (cityData.length > 10) {
            cityData.splice(11, cityData.length - 10);
        }
        this.componentRef.instance.cityList = cityData;
        this.componentRef.instance.onSelect.subscribe(event => {
            console.log(event);
            this.searchForm.reset();
            this.container.clear();
            this.getCityDetails.emit(event);
        });
    }
}
