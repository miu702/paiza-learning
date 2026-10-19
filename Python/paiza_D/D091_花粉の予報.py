"""
あなたは花粉症に悩まされています。花粉の影響が少ない日に外出するために予報を活用することにしました。
10日間分の 1, 2, 3, 4, 5 の5段階評価の花粉の量の予報(1が最も少なく、5が最も多い)が与えられます。

花粉の量が 2 以下であれば外出するとした時、 10 日間のうち何日外出することが出来るかを出力してください。
"""

# 入力 → 変数に変換する
import sys
numbers = list(map(int, sys.stdin.read().split()))

# 花粉量を調べる
limit = 2
count = 0
for number in numbers:
    if(number <= limit):
        count += 1

# 結果を出力する
print(count)
