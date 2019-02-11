import isSorted from './isSorted';
import promiseSleep from '../utils/promise-sleep';

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const bogoSort = async (data, callback) => {
  // console.info('bogo', isSorted(data));
  if(!isSorted(data)) {
    callback(data);
    return promiseSleep(200).then(() => bogoSort(shuffle(data), callback));
  }
  return data;
}

export default bogoSort;
