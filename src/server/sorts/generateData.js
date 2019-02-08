const generate = (count, numbers=[], i=0) => {
  if (i >= count) {
    return numbers;
  }
  const newNumber = Math.round(Math.random() * 1000);
  return generate(count, [...numbers, newNumber], i+1);
};


export default (count=1000) => generate(count);
