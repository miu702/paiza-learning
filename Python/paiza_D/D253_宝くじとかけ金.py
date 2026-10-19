"""
A 君はとある宝くじを買うことにしました、その宝くじでは当選した場合、かけ金の 2 乗の金額が返金されます。
A 君のかけ金 N 円が与えられるので、A 君が当選した場合に返金される金額を求めるプログラムを作成してください。

"""

# 掛け金を定義
cash = int(input())


# 係数と2乗の計算をする
coefficient = 2
return_cash = cash ** coefficient
print(return_cash)