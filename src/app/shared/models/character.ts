export class Character {

    /**
     * Character ID
     */
    char_id: number;

    /**
     * Character name
     */
    name: string;

    /**
     * String date representation
     */
    birthday: string;

    /**
     * Array of occupations
     */
    occupation: Array<string>;

    /**
     * URL to an image for this character
     */
    img: string;

    /**
     * Life status
     */
    status: string;

    /**
     * Nickname used in the film
     */
    nickname: string;

    /**
     * Episodes list
     */
    appearance: Array<number>;

    /**
     * Not used fields
     */
    portrayed: string;
    category: string;
    better_call_saul_appearance: Array<any>;

}

