"""
そろそろ衣替えのシーズンです。夏物の服をしまって冬物の服を出しましょう。

10 着の服に関してそれが夏物か冬物かの情報が与えられるので、
その半分 (5 着) 以上が冬物になっているかどうか 
(なっていれば OK、なっていなければ NG) を判定してください。
"""

clothesList = input().split()

clothesCheck = 0
for i in range(len(clothesList)):
    if clothesList[i] == "W": clothesCheck += 1

referenceValue = 5
print("OK" if clothesCheck >= referenceValue else "NG")