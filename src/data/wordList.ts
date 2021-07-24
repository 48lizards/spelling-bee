import fs from 'fs';

const data = fs.readFileSync(__dirname + '/wordList.txt', 'utf8');
const wordList = data.split('\n');

export default wordList;