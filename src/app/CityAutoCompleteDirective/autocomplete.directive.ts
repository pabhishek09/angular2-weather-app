import { Directive } from '@angular/core';

@Directive({
    selector: 'city-autocomplete',
    host: {
        "(keyup)": "onKey($event)"
    }
})
export class CityAutocompleteDirective {
    
}
