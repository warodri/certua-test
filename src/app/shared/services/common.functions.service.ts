import { Character } from '../models/character';

export class CommonFunctions {

    /**
     * Takes a string date and transforms it to something nicer.
     * Not using DATE PIPE for this because some of them are 'Unknown'
     */
    static beautifyDate(date: string) {
        return (date && date !== 'Unknown') ? new Date(date).toLocaleDateString() : 'Unknown';
    }

}
