"""
整数 N と M が与えられるので N を M で割った余りを出力して下さい。
割り切れて余りが 0 の場合も 0 と出力して下さい。
"""

A = int(input())
B = int(input())

rest = A % B
print(rest)