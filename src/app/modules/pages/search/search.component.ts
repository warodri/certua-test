import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AutocompleteService } from 'src/app/shared/services/autocomplete.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    /**
     * Form group for search field
     */
    searchControl: FormControl;

    constructor(
        private fb: FormBuilder,
        /**
         * Autocomplete service works with
         * our CharactersComponent
         */
        private autocompleteService: AutocompleteService
    ) { }

    ngOnInit() {
        this.searchControl = new FormControl('', Validators.required);
    }

    /**
     * Gets each key pressed and performs filtering
     */
    keyPressed(event: any) {
        const text = event.target.value;
        this.filterResults(text);
    }

    /**
     * Sends a message to filter results
     */
    filterResults(text: string) {
        this.autocompleteService.messageEmitter.next(text);
    }

}
