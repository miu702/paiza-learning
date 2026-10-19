"""
あなたは降水確率から傘を持っていくかどうかを考えています。
午前の降水確率と午後の降水確率を足して 50 %以上であれば傘を持っていくことにしました。

午前の降水確率、午後の降水確率が改行区切りで与えられるので、
午前と午後の降水確率を足して 50 %以上の場合は "yes" 、それ以外は "no" と出力してください。
"""

# 数値を配列に変換する
import sys
percents = list(map(int, sys.stdin.read().split()))


# 条件に沿って出力する
total = percents[0] + percents[1]
limit = 50
print("yes" if total >= limit else "no")