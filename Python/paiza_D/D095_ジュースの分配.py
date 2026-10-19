"""
あなたはジュースを N ミリリットル手に入れました。
そのジュースを M ミリリットル入るコップにわけることにしました。

N, M の順に改行区切りで値が与えられるので、いくつのコップにわけることが出来るかを求めてください。

ただし、余ったジュースは自分でこっそり飲んでしまうのでわけた数には含まないことにします。
"""

import sys
numbers = list(map(int, sys.stdin.read().split()))

full = numbers[0]
person = numbers[1]

# // で割り算の商のみを出力(整数)
cups = full // person
print(cups)