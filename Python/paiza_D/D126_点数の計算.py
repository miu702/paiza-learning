"""
Paiza くんが参加するコーディングコンテストではコードの正確性、実行時間、綺麗さの
3 つの項目がそれぞれ 10 点満点で評価され、それらの合計点数が得点となります。

Paiza くんのコンテスト結果が、正確性、実行時間、きれいさの 3 つで与えられるので、
彼の得点を出力してください。

ただし、各項目の点数は 0 以上の整数です。
"""
import sys
points = list(map(int, sys.stdin.read().split()))

total = 0
for p in points:
    total += p
print(total)