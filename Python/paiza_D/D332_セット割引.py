"""
あなたは飲食店の割引の計算をするプログラムを作成しています。

p 円の食べ物と q 円の飲み物を頼んだ時に合計金額が 1000 円以上の場合に 100 円引きされます。

食べ物の値段 p 円と飲み物の値段 q 円が改行区切りで与えられるので割引を計算した結果がいくらになるか出力してください。
"""

# 価格を配列に変換する
import sys
prices = list(map(int, sys.stdin.read().split()))


# 配列の中身を合計する
total = 0
for p in prices:
    total += p


# 条件に沿って出力する
limit = 1000
discount = 100
print(total - discount if total >= limit else total)


