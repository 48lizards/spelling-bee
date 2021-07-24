import fs from 'fs';

const data = fs.readFileSync(__dirname + '/pangrams.txt', 'utf8');
const pangrams = data.split('\n');

export default pangrams;