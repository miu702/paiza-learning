"""
あなたは文字列 s の中に文字 c が n 文字目に存在するかどうか確認するプログラムを作成しています。


文字列 s ,文字 c ,確認する文字列の位置 n が改行区切りで与えられるので、
文字列 s の n 文字目に文字 c が存在する場合は "Yes" と
存在しない場合は "No" と出力してください。

"""

# 入力 → 変数に変換する。
words = list(input())
target = input()
index = int(input()) - 1


# 指定した位置にターゲットがあるとき、Yesと出力
print("Yes" if words[index] == target else "No")