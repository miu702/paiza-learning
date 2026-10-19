"""
あなたは午前と午後を表示するプログラムを作成しています。

現在の時間 h が与えられるので 0 以上 12 未満であれば "AM"、
12 以上 24未満であれば "PM" と出力してください。
"""

# 現在の時間を定義する
time = int(input())

# 条件に使用する値を定義する
under = 0
limit = 12
upper = 24


# 現在の時間が午前なのか午後なのかを出力する
if(time >= under and time < limit):
    print("AM")
elif(time >= limit and time < upper):
    print("PM")
