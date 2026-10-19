"""
持ったまま一定の距離を歩くと孵化する不思議なタマゴがあります。あなたはこのタマゴをなるべくいっぺんに孵化させようと思い、3 つをまとめて持っていくことにしました。
これらをすべて孵化させるのに最低限必要な歩行距離を求めてください。
"""
numberStr = input().split()

d_1 = int(numberStr[0])
d_2 = int(numberStr[1])
d_3 = int(numberStr[2])

max = max(d_1, d_2, d_3)
print(max)