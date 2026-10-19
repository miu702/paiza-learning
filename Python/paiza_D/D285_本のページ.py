"""
あなたは N ページの本を持っています。 1 日で a ページ読む場合、何日目に読み終わることが可能かを出力してください。
"""

# 本のページ数と、1日の量を定義する
book = int(input())
day = int(input())


# 何日と、あまりの量を計算する
unit = book // day
rest = book % day


# 条件に沿って出力する
if rest > 0:
    total = unit + 1
    print(total)
elif rest == 0:
    print(unit)
    