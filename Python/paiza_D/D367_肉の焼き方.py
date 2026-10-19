"""
あなたは肉の焼き方にこだわりがあります。

肉を 1 枚ずつ表面と裏面をそれぞれ n 秒焼きます。
m 枚の肉を焼くのに何秒かかるか出力してください。
"""
# 肉を焼く時間と焼く枚数を定義する
import sys
seconds = list(map(int, sys.stdin.read().split()))


# 合計時間を計算し、出力する
total = (seconds[0] * 2) * seconds[1]
print(total)