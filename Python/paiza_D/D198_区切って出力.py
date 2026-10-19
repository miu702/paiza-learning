"""
あなたは入力された数値を出力するプログラムを作成しています。

2つの数字が入力されるので「/」で2つの数字を区切って1行出力してください。
"""

# 入力 → 変数に変換する。
number_1 = int(input())
number_2 = int(input())


# 文章を作成する
sentence = f"{number_1}/{number_2}"
print(sentence)