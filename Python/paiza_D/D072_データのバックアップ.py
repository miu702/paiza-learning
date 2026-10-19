"""
あなたはパソコンにある大量のデータをバックアップするために、外部記憶装置を購入しようとしています。


バックアップをしたいデータの容量 X GB(ギガバイト)
外部記憶装置 1 つあたりの容量 Y GB
外部記憶装置 1 つあたりの価格 P 円
がそれぞれ与えられるので全てのデータをバックアップするために何円必要か計算するプログラムを作成してください。


"""

import sys
numbers = list(map(int, sys.stdin.read().split()))

totalAmount = numbers[0]
oneQuantity = numbers[1]
price = numbers[2]

quotient = totalAmount // oneQuantity
rest = totalAmount % oneQuantity

if rest > 0:
    totalPrice = price * (quotient + 1)
    print(totalPrice)
elif rest == 0:
    totalPrice = price * quotient
    print(totalPrice)
