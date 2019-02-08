import genData from './generateData';
import bogoSort from './bogoSort';

const numbers = genData(10);
let runs = 0;

console.log(bogoSort(numbers, () => runs++), runs); // eslint-disable-line
