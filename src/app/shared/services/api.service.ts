import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map, share, shareReplay } from 'rxjs/operators';
import { of } from 'rxjs';
import { Character } from '../models/character';

/**
 * Default http options to send for most of our requests
 */
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    /**
     * Small cache implementation
     */
    private record$: Observable<Character[]>;

    /**
     * Max cache time (in seconds)
     */
    private maxAge = 30;

    /**
     * When was the last time the API was called
     */
    private lastApiCall = new Date();


    constructor(
        private http: HttpClient
    ) { }

    /**
     * Get the URI for this test api call
     */
    getUri() {
        return '/characters';
    }

    /**
     * Get records from server and then cache results
     */
    get(): Observable<Character[]> {
        // Verify cache time
        this.verifyMaxAge();

        if (!this.record$) {
            // We go to the server here
            this.record$ = this.http.get<Character[]>(
                environment.api_endpoint_root + this.getUri(),
                httpOptions)
            .pipe(shareReplay(1));
        }

        // Set last time this api was called
        this.lastApiCall = new Date();

        // Return either cache or server content
        return this.record$;
    }

    /**
     * Chear cache if MaxAge has reached
     */
    verifyMaxAge() {
        const now = new Date();
        const diff = (now.getTime() - this.lastApiCall.getTime()) / 1000;
        if (diff > this.maxAge) {
            this.clearCache();
        }
    }

    /**
     * Clear the cache whenever you need
     * according to your logic
     */
    clearCache() {
        this.record$ = null;
    }

}
