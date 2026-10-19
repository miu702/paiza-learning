# 1 分間で 1 % の充電が可能なスマートフォンの充電器があります。
# 現在のスマートフォンのバッテリーの残量 n % からこの充電器で 100 % まで充電するのに何分かかるかを求めてください。

battery = int(input())

full = 100
rest = full - battery
print(rest)