"""
あなたはテストの採点をしています。
テストの解答用紙はA4用紙 1 枚です。

あなたはテスト 1 枚あたり、X 分で採点することができます。

T 時間 ( 60 分 )でテストを何枚採点できるか出力してください。
"""

# 入力 → 配列に変換する。
import sys
numbers = list(map(int, sys.stdin.read().split()))

# 1枚のテストにかかる時間、全体の時間を計算する
test = numbers[0]
hour = numbers[1]
total_time = hour * 60

# 全体の時間で何枚できるか計算する
unit = total_time // test
print(unit)

