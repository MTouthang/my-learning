const str = "hello world";

// inbuilt method --
const result = str.split("").reverse().join("");
console.log(result);

let revStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  revStr += str[i];
}
console.log(revStr);
