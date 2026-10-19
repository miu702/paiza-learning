"""
A 君には夏休みの課題が 500 ページあります。

A 君は一昨日に a ページ、 昨日に b ページ分の課題を終わらせました。
課題は残り何ページですか？
"""

# 条件に沿って出力する
A = int(input())
B = int(input())

total = 500
rest = total - A - B
print(rest)