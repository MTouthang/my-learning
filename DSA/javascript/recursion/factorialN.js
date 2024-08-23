const N = 3;

const sumNthNumber = (n) => {
  if (n == 1) {
    return 1;
  }
  return n * sumNthNumber(n - 1);
};

const result = sumNthNumber(N);
console.log(result);
