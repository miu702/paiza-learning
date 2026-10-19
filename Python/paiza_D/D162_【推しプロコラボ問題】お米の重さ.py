"""
お米の重さの単位として合というものがあります。 1 合はおおよそ 150 gとされています。

1 合あたり 150 gとし N 合のお米がある時、何gになるかを出力してください。
"""

# お米の重さを調べる
number = int(input())
unit = 150
total = unit * number
print(total)