"""
あなたは体温を測り出社するかどうかを決めています。

体温が小数点第一位まで与えられるので 37.0 度以上の場合は出社しないので NG と出力し
37.0 度未満であれば出社するので OK と出力して下さい。

"""

# 少数を使用する場合、float()で入力を囲むことで使うことができる
body_temperature = float(input())

limit = 37.0
print("NG" if body_temperature >= limit else "OK")