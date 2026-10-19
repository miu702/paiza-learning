"""
A 君は株取引が大好きです。A 君はもともと X 円所持していましたが、昨日株価が上昇したため Y 円儲かりました。
しかし、今日株価が下落したため Z 円損してしまいました。

A 君の現在の所持金はいくらですか？
"""

# 初めの所持金、儲かり額、損した額を定義
amount = int(input())
profit = int(input())
loss = int(input())

# 現在の所持金を定義
current = amount + profit - loss
print(current)