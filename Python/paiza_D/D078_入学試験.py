"""
あなたは PAIZA 大学の 7 科目からなる入学試験を受けました。
7 つの科目はすべて 100 点満点のテストで、平均点が合格点以上なら合格します。

あなたの 7 科目それぞれの点数と合格点が与えられるので、
合格する場合は"pass"を、不合格の場合は"failure"を出力してください。
"""

# 入力から一気に数値化して、変数に変換する
import sys
numbers = list(map(int, sys.stdin.read().split()))

# 点数と合格スコアに分ける。
scores = numbers[:len(numbers) -1 :1]
passScore = numbers[len(numbers) - 1]


# 合計を求める。for-ofのPython版で処理回数がずれないようにする
total = 0
for score in scores:
    total += score

# 平均を求める。平均が合格点以上なら「pass」、未満なら、「failure」を出力。
average = total / len(scores)
if average >= passScore:
    print("pass")
else:
    print("failure")