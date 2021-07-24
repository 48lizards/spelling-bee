import { containsSubsetOfLetters, getPossibleWords, scoreWord } from './helpers';

const letters = ['d', 'c', 'e', 'i', 't', 'u', 'v'];

describe('containsSubsetOfLetters', () => {
    it('returns true if the word comprises all of the letters in letters array', () => {
        const isSubset = containsSubsetOfLetters(letters, 'deductive');
        expect(isSubset).toBe(true);
    });

    it('returns true if the word comprises a subset of the letters in letters array', () => {
        expect(containsSubsetOfLetters(letters, 'cede')).toBe(true);
        expect(containsSubsetOfLetters(letters, 'decide')).toBe(true);
        expect(containsSubsetOfLetters(letters, 'evicted')).toBe(true);
    });

    it('returns false if the word contains any letter not in the letters array', () => {
        const isSubset = containsSubsetOfLetters(letters, 'code');
        expect(isSubset).toBe(false);
    });
})

describe('getPossibleWords', () => {
    it('contains pangram', () => {
        const possibleWords = getPossibleWords(letters, 'd');
        expect(possibleWords).toContain('deductive')
    });

    it('contains non-pangrams', () => {
        const possibleWords = getPossibleWords(letters, 'd');
        expect(possibleWords).toContain('ceded')
        expect(possibleWords).toContain('divvied')
        expect(possibleWords).toContain('edict')
    });
});


describe('scoreWord', () => {
    it('scores 4 letter words 1 point', () => {
        expect(scoreWord(letters, 'd', 'cede')).toBe(1);
        expect(scoreWord(letters, 'd', 'duet')).toBe(1);
        expect(scoreWord(letters, 'd', 'dude')).toBe(1);
    });

    it('scores words with more than 4 letters by their length', () => {
        expect(scoreWord(letters, 'd', 'etude')).toBe(5);
        expect(scoreWord(letters, 'd', 'deduct')).toBe(6);
        expect(scoreWord(letters, 'd', 'duetted')).toBe(7);
        expect(scoreWord(letters, 'd', 'deceived')).toBe(8);
        expect(scoreWord(letters, 'd', 'detective')).toBe(9);
    });

    it('scores pangrams by their lenth + 7', () => {
        expect(scoreWord(letters, 'd', 'deductive')).toBe(16);
    });
});