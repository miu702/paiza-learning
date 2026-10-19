"""
あなたは給与の計算プログラムを作成しています。
時給 N と働いた時間 M が改行区切りで与えられるので給与を出力してください。

"""

# 入力 → 変数に変換する。
hourly_wage = int(input())
hour = int(input())


# 合計金額を計算する
total = hourly_wage * hour
print(total)