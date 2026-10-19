"""
あなたは気温の寒暖差の激しい季節に体調を崩さないように気温の寒暖差が確認する
プログラムを作ることにしました。

最高気温 H 度と最低気温 L 度がスペース区切りで入力されるので寒暖の差が何度か
を出力してください。
"""

# 入力 → 変数に変換する。
import sys
numbers = list(map(int, sys.stdin.read().split()))

# 気温差を計算する
high = numbers[0]
low = numbers[1]
between = high - low
print(between)