"""
あなたは本を読んでいたところ、残り何ページか知りたくなりました。

本の総ページ数 m と読み終えたページ n が入力されるので、残りのページ数を表示してください。
"""

import sys
numbers = list(map(int, sys.stdin.read().split()))

totalPages = numbers[0]
readPages = numbers[1]
    
rest = totalPages - readPages
print(rest)