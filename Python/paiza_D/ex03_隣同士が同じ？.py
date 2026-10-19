"""
問題3 隣同士が同じ？

数字がスペース区切りで入力されます。

隣り合う数字が同じ場所が1つでもあれば "Yes"

なければ "No" を出力してください。
"""

import sys
numbers = list(map(int, sys.stdin.read().split()))


# 配列の長さ - 1回の調査を実施する。なぜなら、 i + 1で1つ先も見るので、- 1しないとエリア外に行ってしまうから。
check = False
for i in range(len(numbers) - 1):
    if(numbers[i + 1] == numbers[i]): 
        check = True
        break
    
# 条件に沿って出力を実施    
print("Yes" if check else "No")