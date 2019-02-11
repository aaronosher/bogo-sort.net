import genData from './generateData';
import bogoSort from './bogoSort';

const numbers = genData(1000);
// let runs = 0;

export default async callback => {
  console.info("calling sort");
  bogoSort(numbers, callback);
}

// console.log(bogoSort(numbers, () => runs++), runs); // eslint-disable-line
