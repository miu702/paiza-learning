"""
あなたは健康のために食事の塩分の量を知りたくなりました。

食事の量 x グラム、塩分濃度 y パーセントが改行区切りで与えられるので何グラムの塩分が含まれるか出力してください。
"""

# 食事の量、塩分濃度を定義する
meal = int(input())
percent = int(input())


# 合計の塩の量を計算し、出力する
total_salt = meal * percent / 100
print(int(total_salt))