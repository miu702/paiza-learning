"""

3 つの整数がスペース区切りで与えられます。
3 つの整数を掛け算した数値を出力して下さい。
"""
import sys
numbers = list(map(int, sys.stdin.read().split()))

A = numbers[0]
B = numbers[1]
C = numbers[2]

total = A * B * C
print(total)