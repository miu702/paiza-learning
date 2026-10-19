"""
あなたは年月日を出力するプログラムを作成しています。

年 y 、月 m 、 日 d が改行区切りで与えられるので
"/" 区切りの 1 行で出力してください。
"""

# 年、月、日を定義する
year = int(input())
month = int(input())
day = int(input())


# 日付を作成し、出力する
fullDate = f"{year}/{month}/{day}"
print(fullDate)