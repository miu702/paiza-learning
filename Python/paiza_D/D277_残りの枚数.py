"""
あなたはカードゲームをしています。
そのゲームは全部で n 枚のカードがありそのうち m 枚を使用します。

使用せずに余ったカードの枚数を計算して出力してください。
"""

# カードの量を定義する
full = int(input())
use_card = int(input())


# あまりのカードを計算する
rest = full - use_card
print(rest)