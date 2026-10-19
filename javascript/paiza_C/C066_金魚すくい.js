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
  const [goldfish_int, poi, poi_durability] = lines[0].split(" ").map(Number);
  const goldfishs = lines.slice(1);
  const pois = new Array(poi).fill(poi_durability);

  // ポイが全て壊れているかチェック。
  let pois_check = true;

  // ポイと金魚のindex
  let poi_index = 0;
  let goldfish_index = 0;

  let total = 0;
  // 金魚を取る
  while (pois_check && goldfish_index < goldfishs.length) {
    if (poi_index === pois.length) {
      pois_check = false;
      break;
    }
    // 今のポイと金魚
    let current_poi = pois[poi_index];
    const current_goldfish = goldfishs[goldfish_index];

    // 今の金魚が取れるか。
    if (current_poi > current_goldfish) {
      total++;
      goldfish_index++;
      pois[poi_index] -= current_goldfish;
    } else {
      poi_index++;
      // ポイが全て壊れたら終了。
      if (poi_index === pois.length) {
        pois_check = false;
        break;
      }
    }
  }

  console.log(total);
});
