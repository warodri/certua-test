export class ErrorInterpreter {

    /**
     * You can add error codes here as static readonly variables
     */

    public static getMessageForInternetError(code: number = -1) {
        if (code === 401) {
            return 'You are not authorized. Please login first.';
        } else if (code === 403) {
            return 'This URL is forbidden. No calls can be done.';
        } else if (code === 500) {
            return 'Server error. Please try again later.';
        } else {
            return `Error recovering information. Please try again later.`;
        }
    }

    /**
     * Dummy default message
     */
    public static getDefaultUnknownError(error: any) {
        return `We have an unexpected error.`;
    }

    /**
     * We can analyze error events and respond according to our logic
     */
    public static getMessageForErrorEvents(event: ErrorEvent) {
        return 'Error type event occurred';
    }

}
