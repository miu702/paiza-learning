#長さが n の文字列 S と長さが m の文字列 T が改行区切りで入力されます。
#S と T が完全一致していれば「Yes」、それ以外は「No」と出力するプログラムを作成してください。

import sys
lines = sys.stdin.read().splitlines()

A = lines[0]
B = lines[1]
print("Yes" if A == B else "No")