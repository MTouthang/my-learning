const N = 10;
const name = "mang";

const printNTimes = (N, name) => {
  if (N <= 0) {
    return;
  }
  console.log(name);

  printNTimes(N - 1, name);
};

printNTimes(N, name);
