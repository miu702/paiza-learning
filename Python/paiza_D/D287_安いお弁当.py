"""
あなたはお昼ご飯にお弁当を買うことにしました。
しかし、あなたは金欠なためできるだけ安くお弁当を買いたいです。

定価 A 円のお弁当と 30%OFFのシールが貼られている定価 B 円のお弁当があります。

より安い方のお弁当を購入するときの金額を出力してください。
なお、30%OFF したときに小数点以下は切り捨てられることとします。
"""

# 入力 → 変数に変換する。
import sys
numbers = list(map(int, sys.stdin.read().split()))

# お弁当の価格を定義する
A = numbers[0]
B = numbers[1]

# 割引を行う
discount = 0.3
B_discount = B * (1 - 0.3)


# 安い方を出力する
print(A if A < int(B_discount) else int(B_discount))

