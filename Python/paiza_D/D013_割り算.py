#整数 m と n が与えられます。m を n で割り算した商と余りを出力して下さい。

import sys
numbers = list(map(int, sys.stdin.read().split()))

m = numbers[0]
n = numbers[1]

quotient = m // n
rest = m % n
print(quotient, rest)