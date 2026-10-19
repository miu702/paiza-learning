"""
あなたは、水道設備の整っていない街に住んでいて、雨水を貯水して生活用水として用いています。
貯水タンクの容量と、直前一週間分の1日あたりの降水量のデータが与えられるので、
現在貯水タンクにはどれだけ水が溜まっているか求めてください。

なお、貯水タンクの水ははじめ一切水が入っておらず、一週間の間溜めるのみで使用することはないものとします。
"""

# 入力 → 変数に変換する。
import sys
water_tank = int(input())
waters = list(map(int, sys.stdin.read().split()))


# 合計量を求める
total = 0
for w in waters:
    total += w
    

# 合計量と上限値の小さい方を出力する
print(min(total, water_tank))

