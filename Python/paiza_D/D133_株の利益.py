"""
あなたは、X 円の資金を元に株式投資を始めようと思っています。
株価の上昇が見込めそうな銘柄を見つけたので、全財産を投じ買えるだけ買って株価が上がったら売ろうと考えました。

上昇前の株価 A 円と上昇後の株価 B 円が与えられるので、いくら利益を上げることができたか計算してください。
ただし、株は 1 単位ごとにしか購入できないことに注意してください。
"""

# 入力 → 変数に変換する
import sys
number = list(map(int, sys.stdin.read().split()))


# 資金、購入時、売却時、株式数、あまりのお金を定義
funds = number[0]
before = number[1]
after = number[2]
stock = funds // before
rest = funds % before


# 履歴を計算する。売った合計 + あまりのお金 - 購入金額
profit = (stock * after + rest) - funds
print(profit)

