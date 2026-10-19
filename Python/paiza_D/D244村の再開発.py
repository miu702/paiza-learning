"""
A 村にはもともと 100 人の人が住んでいました。A 村には新しくテーマパークできたため、人口が増加しました。
結果、A 村では人口が毎月 X 人ずつ増加します。Y 月後の A 村の人口はいくらですか？
"""

# 増え方と年数を定義する
add = int(input())
year = int(input())


# 計算し、出力する
start = 100
total = start + (add * year)
print(total)