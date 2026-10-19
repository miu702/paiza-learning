"""
あなたの会社は、昨今流行りのテレワークを導入し、テレビ電話を用いて会議をすることにしました。

全員の顔を画面に映しながら会議をしようと思ったあなたは、画面を N × N の四角形に分割し、
その枠一つにつき一人の顔が映るようにしました。

画面の分割数を表す整数 N とテレビ会議に現在出席している人数 M が与えられるので、
あと何人テレビ会議に参加することができるか求めるプログラムを作成してください。
"""

# 入力→変数に変換する。
import sys
numbers = list(map(int, sys.stdin.read().split()))
division = numbers[0]
attend = numbers[1]

# 計算を実施する
total = numbers[0] * numbers[0]
rest = total - attend
print(rest)
