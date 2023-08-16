export default class Kanji {
    kanji: string;
    jlpt: number;
    fr: [string];
    eng: [string];
    onyomi: [string];
    kunyomi: [string];

    constructor(
        kanji: string,
        jlpt: number,
        fr: [string],
        eng: [string],
        onyomi: [string],
        kunyomi: [string]

    ) {
        this.kanji = kanji;
        this.onyomi = onyomi;
        this.kunyomi = kunyomi;
        this.fr = fr;
        this.eng = eng;
        this.jlpt = jlpt;
    }
}