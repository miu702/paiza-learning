"""
あなたは 1, 2, 3, 4, 5 の数字の書かれた 5種類のカードを集めています。
4 枚目まで集まり、残り 1 枚で全て揃うというところでカードが混ざってしまいました。

4 枚のカードの情報が改行区切りで入力されるので、 
1 から 5 のカードのうち足りないカードの数字を出力してください。
"""

import sys
numbers = list(map(int, sys.stdin.read().split()))

check = [False] * 5
for number in numbers:
    if check[number - 1] == False:
        check[number - 1] = True
        
rest = check.index(False)
print(rest + 1)