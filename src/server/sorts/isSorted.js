export default (numbers) => {
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i+1] < numbers[i]) {
      return false;
    }
  }
  return true;
}
