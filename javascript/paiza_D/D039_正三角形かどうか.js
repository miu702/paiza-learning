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
  const A = Number(lines[0]);
  const B = Number(lines[1]);
  const C = Number(lines[2]);

  if (A === B && A === C && B === C) {
    console.log("YES");
  } else {
    console.log("NO");
  }
});
