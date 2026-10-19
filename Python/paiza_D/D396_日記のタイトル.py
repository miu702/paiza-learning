"""
あなたは日記を書いています。日記のタイトルに日付を付けて保存することにしました。

月 m 、日付 d 、タイトルの文字列 S がそれぞれ改行区切りで与えられるので 
"m/d-S" という形式で出力して下さい。
"""

# 月、日、タイトルを定義する
month = int(input())
day = int(input())
title = input()


# 形式を作成し、出力する
fullName = f"{month}/{day}-{title}"
print(fullName)