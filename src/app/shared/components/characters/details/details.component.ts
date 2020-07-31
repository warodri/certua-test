import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Character } from '../../../models/character';
import { ApiService } from '../../../services/api.service';
import { CommonFunctions } from 'src/app/shared/services/common.functions.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class CharactersDetailsComponent implements OnInit {

    character: Character;

    notFound = false;

    processFinished = false;

    /**
     * Constructor
     */
    constructor(
        private actRoute: ActivatedRoute,
        private apiService: ApiService
    ) {}

    /**
     * Init here.
     */
    ngOnInit(): void {
        this.actRoute.params.subscribe( params => {
            const characterId = params.id;
            this.getCharacterId(characterId);
        });
    }

    /**
     * Get the ID of this character.
     * We go to the API again but as I implemented a cache for
     * 30 seconds, this content will be retrieved very fast and 
     * from memory.
     */
    getCharacterId(characterId: number) {
        this.apiService.get().subscribe( (response: Array<Character>) => {
            this.character = response.find( c => {
                return c.char_id == characterId;
            });
            if (!this.character) {
                this.notFound = true;
            }
            this.character.birthday = CommonFunctions.beautifyDate(this.character.birthday);
            this.processFinished = true;
        });
    }

    /**
     * Another approach for this is to use Observables or Subject,
     * where I communicate via messages the record I want to use 
     * for showing details.
     */


}
