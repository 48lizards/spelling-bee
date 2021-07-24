import fs from 'fs';

function getUniqueLetters(word: string): Set<string> {
    return new Set(word);
}

// dictionary.txt comes from https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt
const data = fs.readFileSync(__dirname + '/../data/dictionary.txt', 'utf8');
const dictionary = data.split('\r\n');

const wordList = dictionary
    .filter(word => word.length >= 4)
    .filter(word => getUniqueLetters(word).size <= 7);

wordList.forEach(word => {
    console.log(word);
});