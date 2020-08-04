import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ErrorInterpreter } from './error-interpreter';

@Injectable()
export class GlobalHttpInterceptorService implements HttpInterceptor {

    constructor() {}

    /**
     * Intercept http errors
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log('Intercepting HttpRequest');

        /**
         * All HTTP requests will be processed here before sending
         * We can do things like adding a token or header values.
         *
         * req = req.clone({ headers: req.headers.set('Authorization', 'Bearer 123') });
         */

        return next.handle(req).pipe(

            catchError((error) => {

                console.log('HTTP Error occurred!');

                let message = ErrorInterpreter.getDefaultUnknownError(error);

                if (error instanceof HttpErrorResponse) {
                    /**
                     * Http related error
                     */
                    if (error.error instanceof ErrorEvent) {
                        console.error('Error type: Event');
                    } else {
                        message = ErrorInterpreter.getMessageForInternetError(error.status);
                    }
                }

                /**
                 * We can stop the execution here and
                 * don't send this error back.
                 *
                 * If we route the flow to our /login
                 * for example, we can do
                 *
                 * return of(error);
                 *
                 * and don't let components know about
                 * this error. It's like nothing happened.
                 */

                /**
                 * Send this error back
                 */
                return throwError(new Error(message));

            })
        );
    }

}
