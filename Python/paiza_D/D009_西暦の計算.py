#2つの西暦 a, b が半角スペース区切りの整数で入力されます。a から b が何年間あるか出力してください。

import sys
numbers = list(map(int, sys.stdin.read().split()))

A = numbers[0]
B = numbers[1]

between = B - A
print(between)