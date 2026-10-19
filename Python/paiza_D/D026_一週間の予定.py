# あなたは1週間を全て休みにするために有給を申請することにしました。もともと決まっている休みもあります。

# 改行区切りで7日間のもともと決まった休みが、休みならば「yes」、休みでなければ「no」と入力されます。
# 有給申請しなくては行けない日数を出力してください。

import sys
lines = sys.stdin.read().splitlines()

count = 0
for i in range(len(lines)):
    if lines[i] == "no": count += 1

print(count)