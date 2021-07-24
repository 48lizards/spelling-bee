import assert from 'assert';
import wordList from './data/wordList';

export function containsSubsetOfLetters(letters: string[], testWord: string): boolean {
    const testLetters = Array.from(testWord);
    return testLetters.every(letter => letters.includes(letter));
}

export function getPossibleWords(letters: string[], centerLetter: string): Array<string> {
    assert(centerLetter.length === 1);
    assert(letters.includes(centerLetter));

    return wordList
        .filter(word => containsSubsetOfLetters(letters, word))
        .filter(word => word.includes(centerLetter));
}

export function getIsPangram(letters: string[], word: string): boolean {
    return Array.from(letters).every(letter => word.includes(letter));
}

export function scoreWord(letters: string[], centerLetter: string, word: string, foundWords: string[] = []): number {
    assert(word.length >= 4, 'Too short');
    assert(word.includes(centerLetter), 'Missing center letter');
    assert(Array.from(word).every(letter => letters.includes(letter), 'Bad letters'));
    assert(!foundWords.includes(word), 'Already found')

    const PANGRAM_BONUS_POINTS = 7;

    if (getIsPangram(letters, word)) {
        return word.length + PANGRAM_BONUS_POINTS;
    } else if (word.length === 4) {
        return 1;
    } else {
        return word.length;
    }
}

export function getMaxScore(letters: string[], centerLetter: string): number {
    const possibleWords = getPossibleWords(letters, centerLetter);
    return possibleWords.reduce((totalScore, word) => totalScore + scoreWord(letters, centerLetter, word, []), 0);
}

export function getPossibleWordCountsByCenterLetter(letters: string[]) {
    letters.forEach(letter => {
        const possibleWords = getPossibleWords(letters, letter);
        const possibleWordCount = possibleWords.length;
        console.log(letter, possibleWordCount);
    });

}

function getMaxScoresByCenterLetter(letters: string[]) {
    letters.forEach(letter => {
        const maxScore = getMaxScore(letters, letter);
        console.log(letter, maxScore);
    });
}