"""
ある文字列 S を出力する回数 n 回、ある文字列 S が改行区切りで与えられるので、
文字列 S を改行区切りで n 回出力するプログラムを作成してください。
"""

# 文字列と回数を定義する
number = int(input())
word = input()


# 回数分出力する
for i in range(number):
    print(word)