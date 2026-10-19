"""
2 つの数値 a と b が a, b の順でスペース区切りで与えられるので b, a の順でスペース区切りで出力してください。
"""

import sys
numbers = list(map(int, sys.stdin.read().split()))

# テンプレートリテラルを使用して、出力する
output = f"{numbers[1]} {numbers[0]}"
print(output)