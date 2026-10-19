"""
あなたは数字の書かれた 2 枚のカードを引いて足して 21 になると勝ちというゲームを遊んでいます。

2 枚のカードの数字が改行区切りで入力されるので足して 21 であれば「Win」と出力しそうでない場合は足した数を出力して下さい。
"""

# 入力 → 変数に変換する。
number_1 = int(input())
number_2 = int(input())


# 計算し、条件に沿って出力する
total = number_1 + number_2
limit = 21
print("Win" if total == limit else total)