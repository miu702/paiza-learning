"""
あなたは外出時する時に気温が一定を超えたら熱中症に注意しようと考えています。

気温 t が与えられるので 30 度以上の場合は "DANGER" と出力し 30 度未満の場合は気温 t をそのまま出力してください。
"""

# 気温を定義する
temperature = int(input())


# 条件に沿って出力する
limit = 30
print("DANGER" if temperature >= limit else temperature)