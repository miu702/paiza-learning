"""
あなたは配送物の送料の計算をするプログラムを作成しています。

送料は以下のルールで決められています。

・10 キログラム未満であれば一律 1000 円
・10 キログラム以上であれば 1キログラムあたり 150 円

配送物の重さが与えられるので送料が何円かを出力して下さい。
"""

weight = int(input())

cheapest = 1000
unit = 150

if weight >= 10:
    total_price = unit * weight
    print(total_price)
else:
    print(cheapest)
