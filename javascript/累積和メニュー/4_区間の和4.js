process.stdin.resume();
process.stdin.setEncoding("utf8");

const lines = [];
const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  const [N, left, right, ...numbers] = lines.join(" ").split(/\s+/).map(Number);

  const perfix = new Array(numbers.length + 1).fill(0);
  for (let i = 0; i < numbers.length; i++) {
    perfix[i + 1] = perfix[i] + numbers[i];
  }

  const total = perfix[right + 1] - perfix[left];
  console.log(total);
});
