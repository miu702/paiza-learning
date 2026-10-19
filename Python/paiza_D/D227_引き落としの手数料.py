"""
A 君の口座残高は N 円ですが、引き出すときに手数料として 120 円かかります。

A 君が口座残高をすべて引き出すとき何円引き出せますか？
"""

# 計算に使用する数値を定義
balance = int(input())
commission = 120

# 計算し、出力する
cash = balance - commission
print(cash)