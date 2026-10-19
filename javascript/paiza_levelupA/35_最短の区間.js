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
  const [number, target, ...numbers] = lines.join(" ").split(/\s+/).map(Number);
  console.log(number, target, numbers);

  const prefix = new Array(numbers.length + 1).fill(0);
  for (let i = 0; i < numbers.length; i++) {
    prefix[i + 1] = prefix[i] + numbers[i];
  }
  console.log(prefix);
});
