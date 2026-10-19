"""
あなたはソーシャルゲームで遊んでいます。
ステージに挑戦するためにスタミナと呼ばれる数値を m 消費します。

あなたの現在のスタミナ n が与えられるので、ステージに挑戦可能であれば挑戦した後のスタミナの数値、
挑戦が不可能な場合は "No" を出力してください。
"""


"""
1、sysという機能を使えるようにする
2、変数に対して、sys.stdin.read()で入力を1列にする。
3、split()で1列にした要素を1つずつに分解する。
4、map(int, 2、3)で2、3に対して、属性を持たせる。今回は数値。
5、listで1列にした要素を配列に変更する。

"""

import sys
numbers = list(map(int, sys.stdin.read().split()))

required = numbers[0]
current = numbers[1]

if current >= required:
    rest = current - required
    print(rest)
else:
    print("No")
