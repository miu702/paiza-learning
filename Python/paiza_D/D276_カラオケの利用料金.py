"""
PAIZA さんの行きつけのカラオケ店では、利用料金が 30 分ごとに X 円に設定されています。 
料金の境界はちょうど 30 分で、1 分でも越えると次の 30 分の料金を支払う必要があります。

たとえば、61 分利用した場合、支払う利用料金は 90 分のものになります。

PAIZA さんが部屋を利用した時間が与えられるので、PAIZA さんが支払う利用料金を出力してください。
"""

# 30分ごとの金額と、利用時間を定義する
price = int(input())
time = int(input())

# 30分がいくつあるか調査し、30分ちょうどでない時は、30分の塊を+1する
ones = 30
unit = time // ones
rest = time % ones


# 利用料金を計算する
if rest > 0:
    total = (unit + 1) * price
    print(total)
elif rest == 0:
    total = unit * price
    print(total)
    
    
    