export default class Kanji {
    kanji: string;
    jlpt: number;
    meanings: [string];
    onyomi: [string];
    kunyomi: [string];

    constructor(
        kanji: string,
        jlpt: number,
        meanings: [string],
        onyomi: [string],
        kunyomi: [string]

    ) {
        this.kanji = kanji;
        this.onyomi = onyomi;
        this.kunyomi = kunyomi;
        this.meanings = meanings;
        this.jlpt = jlpt;
    }
}