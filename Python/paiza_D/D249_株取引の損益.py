"""
A君は株取引をしています。A君はB社の株をX円で購入しましたが、
1年後にY円で売却しました。

A君がこの取引で得した場合はYesを、損した場合はNoを出力してください。

"""

# それぞれの金額を定義する
buy = int(input())
cell = int(input())

# 条件に沿って出力する
print("Yes" if buy < cell else "No")