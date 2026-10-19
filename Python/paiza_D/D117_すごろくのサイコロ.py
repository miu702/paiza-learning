"""
あなたはすごろくをしています。このすごろくでは、
目が1から6まである通常のサイコロをいくつか使用し、出た目の数の合計だけ駒を前に進めます。
使用するサイコロの数と出た目が与えられるので、何マス前に進めるのか計算してください。
"""

# サイコロの目を定義する
import sys
number = int(input())
numbers = list(map(int, sys.stdin.read().split()))


# 合計の値を計算し、出力する
total = 0
for N in numbers:
    total += N
    
print(total)