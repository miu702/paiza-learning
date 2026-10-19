"""
あなたは海に遊びに行こうとしています。

海水温が 25 度以上であれば泳ごうと考えています。

海水温 t が与えられるので 25 以上であれば "OK" と出力し、 25 未満の場合は "NG" と出力してください。
"""

# 水温を定義する
water_temperature = int(input())


# 条件に沿って出力する
limit = 25
print("OK" if water_temperature >= limit else "NG")