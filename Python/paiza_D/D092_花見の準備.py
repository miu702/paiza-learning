"""
レジャーシートの質に興味のないあなたは最も面積あたりの価格の安いレジャーシートを探すため、プログラムを書くことにしました。

2つのレジャーシートの横の長さ x, 縦の長さ y, 価格 p が スペース区切りで与えられます。

最も面積あたりの価格の安いレジャーシートの x, y ,p をスペース区切りで出力するプログラムを作成してください。
ただし、面積あたりの価格が同じ場合は "DRAW" と出力してください。
"""

# 入力 → 変数に変換する
import sys
numbers = sys.stdin.read().splitlines()

# データの出力のために保存用と、計算用のデータを作成する
A_str = numbers[0].split()
B_str = numbers[1].split()
A = list(map(int, A_str))
B = list(map(int, B_str))

# 価格の計算をする
A_price = A[2] / (A[0] * A[1])
B_price = B[2] / (B[0] * B[1])


# どっちが安いかを出力する
if(A_price == B_price):
    print("DRAW")
elif(A_price > B_price):
    print(" ".join(B_str))
elif(A_price < B_price):
    print(" ".join(A_str))
    