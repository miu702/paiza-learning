"""
あなたは天気予報のデータを使って梅雨入りかどうかを判断することにしました。
梅雨の判断は色々な基準がありますが 1 週間( 7 日間)のうち 5 日間以上が雨であれば梅雨と判断することに決めました。

7 日間分の天気予報が、雨であれば 1 、晴れであれば 0 としてスペース区切りで入力されます。
雨の日が 5 日間以上であれば「yes」、未満であれば「no」と出力するプログラムを作成してください。
"""

# 入力 → 変数に変換する
import sys
weathers = list(map(int, sys.stdin.read().split()))

# 雨の日をカウントする
rainy = 0
for w in weathers:
    if w == 1:
        rainy += 1

# 雨の日が基準値以上ならyesを出力
limit = 5
print("yes" if rainy >= limit else "no")

