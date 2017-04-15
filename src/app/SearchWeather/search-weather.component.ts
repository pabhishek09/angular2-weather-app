import { Component, OnInit, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { SearchWeatherService } from './search-weather.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    moduleId: module.id,
    selector: 'search-weather',
    templateUrl: './search-weather.component.html',
    styleUrls: ['./search-weather.component.css']
})
export class SearchWeatherComponent implements OnInit {

    searchForm: FormGroup;
    autocompleteRef: any;

    constructor(private searchWeatherService: SearchWeatherService) {}

    ngOnInit() {

        this.searchForm = new FormGroup({
            city: new FormControl('')
        });

        this.searchForm.get('city').valueChanges
        .debounceTime(500)
        .distinctUntilChanged()
        .subscribe((res) => {
            if ((res)&&(res !== "")) {
                this.autocompleteRef = this.searchWeatherService.getCitySuggestions(res);
                console.log(this.autocompleteRef);
            }
        });
        
    }
}

