"""
あなたは飴玉を n 個購入して m 人の子どもたちにそれを配ることにしましたが余りが出てしまいます。
子どもたちが喧嘩をしないために余る飴を先に取り除いておくことにしました。

n 個の飴を m 人に同じ個数配った時の余りを出力してください。
"""

# 入力 → 変数に変換する。
import sys
numbers = list(map(int, sys.stdin.read().split()))


# 意味が分かるように変数名を定義する
sweets = numbers[0]
kids = numbers[1]

# 条件に沿って出力する
rest = sweets % kids
print(rest)