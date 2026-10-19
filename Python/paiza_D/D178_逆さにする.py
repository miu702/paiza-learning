"""
長さ n の文字列 S が入力されるので文字を逆順にして出力してください。
入力は長さ n 、文字列 S が改行区切りで入力されます。

"""

# 入力 → 変数に変換する。
number = int(input())
words = list(input())


# 配列名.[::-1]で反転できる
re_words = words[::-1]
print("".join(re_words))