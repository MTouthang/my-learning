const N = 10;

const sumNthNumber = (n) => {
  if (n == 0) {
    return 0;
  }
  return n + sumNthNumber(n - 1);
};

const result = sumNthNumber(N);
console.log(result);
