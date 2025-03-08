  import * as fs from 'fs';
import * as path from 'path';
const filePath = path.join(__dirname, 'math-problems');
const filePath = path.join(__dirname, 'math-problems');
const problemName = 'Problem1';
const fileName = `${problemName}.ts`;
const fileContents = `export const ${problemName} = () => {
  // Your solution here
};`;
fs.writeFileSync(filePath + fileName, fileContents);