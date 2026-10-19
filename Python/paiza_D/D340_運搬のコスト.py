"""
あなたは運搬のコストを計算するプログラムを作成しています。

1 kgあたりの運搬コストが p 円かかります。
n kgの荷物を運搬する場合に何円の運搬コストになるか出力してください。

"""

# 1kgごとの金額と重さを定義する
price = int(input())
weight = int(input())


# 合計価格を計算し、出力する
total = price * weight
print(total)