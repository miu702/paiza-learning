"""
あなたのアルバイト先の時給と、先月の勤務時間が分単位で与えられます。
給料日に振り込まれる給与額を出力してください。
"""

# 時給と、勤務時間(分)を変数に変換する
import sys
numbers = list(map(int, sys.stdin.read().split()))
hour_pay = numbers[0]
minutes = numbers[1]


# 1分ごとの金額を計算し、勤務時間(分)をかける
minute_pay = hour_pay / 60
total = minute_pay * minutes
print(int(total))