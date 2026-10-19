"""
あなたは2社の通信販売サイトの価格比較をしています。

価格、送料がスペース区切りで各社1行ずつ改行区切りで与えられるので価格と送料の合計が安い方の合計価格を出力してください。
価格、送料の合計が同じ場合はどちらの合計を出力しても問題ない点に注意してください。
"""

# 入力 → 変数に変換する。
import sys
data = sys.stdin.read().splitlines()
A = data[0].split()
B = data[1].split()


# 2次元配列の形で変数を定義する
A_price = int(A[0])
A_postage = int(A[1])

B_price = int(B[0])
B_postage = int(B[1])


# 合計値を求める
total_A = A_price + A_postage
total_B = B_price + B_postage

# 条件に沿って出力する
if(total_A == total_B):
    print(total_A)
elif(total_A > total_B):
    print(total_B)
elif(total_A < total_B):
    print(total_A)


