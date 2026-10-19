"""
今日は杯座神社に初詣でにやってきました。この神社の参拝の仕方は特殊で、
参拝時の「礼」と「拍手」の回数が時と場合によって変わります。
規則がよくわからないあなたは前の人のやり方をみて真似することにしました。

前の人の参拝の「L 礼 M 拍手 N 礼」 について L, M, N が与えられるので、
「礼」を "A"、「拍手」を "B"として参拝の動作を表す文字列を出力してください。
"""

numbers = input().split()

rule = ["A", "B", "A"]
operation = []
for i in range(len(numbers)):
    for j in range(int(numbers[i])):
        operation.append(rule[i])

print("".join(operation))