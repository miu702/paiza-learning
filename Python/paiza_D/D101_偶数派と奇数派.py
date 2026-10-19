"""
あなたは会社を代表して 2 つの数字を選ばなくてはなりませんが、偶数好きと奇数好きの溝が深まらないよう、
それぞれを 1 つずつ選ばなくてはなりません。

候補としてあげられた 2 つの数字が入力されるので、偶数と奇数が両方入っているか確認してください。
"""

import sys
numbers = list(map(int, sys.stdin.read().split()))

# チェック用変数を2つ用意して、チェックを実施する
check_odd = False
check_even = False
for N in numbers:
    if(N % 2 == 0):
        check_even = True
    elif(N % 2 == 1):
        check_odd = True

# 2つ条件がtrueなら、YESを出力
check = check_even and check_odd
print("YES" if check else "NO")

