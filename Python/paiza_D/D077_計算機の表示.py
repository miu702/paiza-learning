"""
あなたは正の整数の掛け算のみをする計算機のプログラムを作成しています。
その計算機は最大で4桁までしか表示できず 9,999 より大きな数字は表示が出来ず "NG" と表示されます。

2つの正の整数 a, b が入力されるので、a と bを掛け算した時 9,999 以下であれば掛け算した結果を出力し、
10,000 以上の場合は "NG" と出力するプログラムを作成してください。
"""

# 入力を1列にして、一気に数値化する
import sys
numbers = list(map(int, sys.stdin.read().split()))

# 掛け算を実施する
A = numbers[0]
B = numbers[1]
total = A * B

# 上限と下限を定義して、条件式に使用する。
min_limit = 1
max_limit = 9999
if total >= min_limit and total <= max_limit:
    print(total)
else:
    print("NG")
