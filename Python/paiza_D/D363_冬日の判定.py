"""
冬日とは最低気温が 0 度未満の日を言います。

ある日の最低気温 T が与えられるので、冬日ならば "W" と出力しそれ以外は最低気温 T を出力してください。
"""
# 気温を定義する
temperature = int(input())


# 条件に沿って出力する
limit = 0
print("W" if temperature < limit else temperature)