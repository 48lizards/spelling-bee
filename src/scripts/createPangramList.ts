import fs from 'fs';

function getUniqueLetters(word: string): Set<string> {
    return new Set(word);
}

const data = fs.readFileSync(__dirname + '/../data/wordList.txt', 'utf8');
const wordList = data.split('\n');

const pangrams = wordList.filter(word => getUniqueLetters(word).size === 7);

pangrams.forEach(word => {
    console.log(word);
});