// -- 数列 --
const numbers = [1, 5, 9, 7, 5, 3, 2, 5, 8, 4];

// -- 累積和配列 --
const prefix = new Array(numbers.length + 1).fill(0);
for (let i = 0; i < numbers.length; i++) {
  prefix[i + 1] = prefix[i] + numbers[i];
}

// -- 部分列を出力する --
const left = 2;
const right = 7;

// -- 使用するときは、right(ここから)に1を足す --
const total = prefix[right + 1] - prefix[left];
console.log(total);
