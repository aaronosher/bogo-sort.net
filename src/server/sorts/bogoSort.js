import isSorted from './isSorted';

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const bogoSort = (data, callback) => {
  while(!isSorted(data)) {
    callback(data);
    shuffle(data);
  }
  return data;
}

export default bogoSort;
