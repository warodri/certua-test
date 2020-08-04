import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { Character } from '../../../models/character';
import { ApiService } from '../../../services/api.service';
import { AutocompleteService } from 'src/app/shared/services/autocomplete.service';
import { CommonFunctions } from 'src/app/shared/services/common.functions.service';
import { ErrorType } from 'src/app/shared/models/error-type';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {

    /**
     * Show errors for Internet calls
     */
    errorType: ErrorType;
    errorMessage: string;

    /**
     * Angular Material Table columns
     */
    public displayedColumns: Array<string> =
        ['name', 'birthday', 'occupation', 'status', 'nickname', 'getDetails'];

    /**
     * Datasource for Angular Material Table
     */
    public dataSource = new MatTableDataSource<Character>();

    /**
     * This is the original result array.
     * This is my backup if the user is filtering results
     */
    private results: Array<Character> = [];

    /**
     * Paginator for results
     */
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

    /**
     * Sort for results
     */
    @ViewChild(MatSort, { static: false }) sort: MatSort;

    /**
     * Constructor
     */
    constructor(
        private apiService: ApiService,
        private router: Router,
        private autocompleteService: AutocompleteService
    ) {}

    /**
     * Init here. Get all records from API
     */
    ngOnInit(): void {
        this.getAllRecords();
    }

    /**
     * Get all records from server
     */
    getAllRecords() {
        this.apiService.get().subscribe( (response: Array<Character>) => {
            // Show dates nicely
            this.setBirthdays(response);

            // Save my original response
            this.results = response;

            // Assign this to our table's datasource
            this.dataSource.data = response;

            // Assign paginator for our table
            this.dataSource.paginator = this.paginator;

            // Assign sorting for our table
            this.dataSource.sort = this.sort;

            // Start listening for filters coming from SearchComponent
            this.subscribeToAutocomplete();

        }, (error) => {
            /**
             * Display errors
             */
            this.errorMessage = error.message;
            this.errorType = ErrorType.TYPE_ERROR;

        }, () => {
            /**
             * This will execute if no errors present
             */
            console.log('Process completed');
        });
    }

    /**
     * Format birthdays for each character
     * Not using DATE PIPE for this because some of them are 'Unknown'
     */
    setBirthdays(data: Array<Character>) {
        for (let c of data) {
            c.birthday = CommonFunctions.beautifyDate(c.birthday);
        }
    }

    /**
     * Users can type any search text in SearchComponent.
     * Those changes arrive here and we filter our results.
     *
     * If no text is entered, then a "null" value is triggered.
     * What we do here is to show the original content stored 
     * in: this.results
     */
    subscribeToAutocomplete() {
        this.autocompleteService.messageEmitter.subscribe( changes => {
            if (!changes) {
                this.dataSource.data = this.results;
            } else {
                this.filterList(changes);
            }
        });
    }

    /**
     * Let's do the filtering here, according
     * to what the user entered in SearchComponent
     */
    filterList(data: string) {

        // Let's work all with lowercases
        data = data.toLocaleLowerCase();

        // Run the filtering here
        const filteredContent = this.results.filter( item => {
            return item.name.toLocaleLowerCase().indexOf(data) > -1 ||
            item.status.toLocaleUpperCase().indexOf(data) > -1 ||
            item.nickname.toLocaleUpperCase().indexOf(data) > -1;
        });
        // Assign the filtered content
        this.dataSource.data = filteredContent;

        // Refresh paginator and sort for the table
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    /**
     * Go and show details for this
     */
    getDetails(character: Character) {
        this.router.navigate(['/details/' + character.char_id]);
    }

}
