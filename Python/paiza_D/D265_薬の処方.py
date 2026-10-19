"""
あなたは薬を処方されました。
n 日分の薬が処方され毎日、朝と昼と晩の合計 3 回 m 錠ずつ飲みます。
合計で何錠の薬を処方されたかを出力してください。
"""

# 日にち、1回の量、1日の回数を定義
days = int(input())
ones = int(input())
times = 3


# 合計の処方量を計算する
total = ones * times * days
print(total)