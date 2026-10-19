"""
あなたはお店の売上データを分析しています。

N日間の売上が与えられます。

連続する K 日間の売上合計が最大になる期間を求めてください。

ただし、最大となる期間が複数ある場合は、最も早い期間を出力してください。
"""

# 全体の日数と期間の日数を定義する
days, period = map(int, input().split())


# 全体のデータを作成する
prices = []
for i in range(days):
    price = int(input())
    prices.append(price)


# 1番目のデータを作成する
totals = []
sum_price = 0
for j in range(period):
    sum_price += prices[j]
totals.append(sum_price)


# 1つずつずらしながら、調査する。調査回数は全体 - 期間
for k in range(days - period):
    left = k
    right = k + period
    
    # ここでずらす
    sum_price -= prices[left]
    sum_price += prices[right]
    totals.append(sum_price)


# 最大値の期間を出力する
max_left = totals.index(max(totals))
max_right = max_left + period

# + 1するのは、インデックス番号を調整するため
print(max_left + 1, max_right)


    
    
    
    
    