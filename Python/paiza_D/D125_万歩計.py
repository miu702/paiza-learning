"""
あなたは、毎日万歩計をつけて外出することにしていて、
家に帰ると万歩計の数字をノートに記録しています。

1 日あたりどの程度歩いたのか知りたくなったあなたは、
1 日の平均歩数を計算してみることにしました。記録した日数と、
歩数のデータが与えられるので、1 日あたりの歩数の平均を求めるプログラムを作成してください。

平均とは与えられた値の合計をデータの数で割った値を指します。

"""

import sys
numbers = list(map(int, sys.stdin.read().split()))

# 日数と歩く歩数を管理する
day = numbers[0]
walk = numbers[1:]

# 合計を求める
total = 0
for w in walk:
    total += w
    
# 平均を求める。小数点以下をカットする
average = total // day
print(average)

