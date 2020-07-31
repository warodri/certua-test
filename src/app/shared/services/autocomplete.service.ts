import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AutocompleteService {

    /**
     * Communicate the SearchComponent
     * and the CharactersComponent
     */
    messageEmitter = new Subject<string>();

}

