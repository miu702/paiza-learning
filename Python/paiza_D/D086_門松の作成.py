"""
あなたはお正月に向けて門松を作ることにしました。 門松は3本の竹からなり、
それぞれ竹の長さは 3 : 5 : 7 の比率で作る習わしとなっています。

最も短い竹の長さが与えられるので、 3 本の竹に切断し門松を作るために
必要な 1 本の竹の長さを出力してください。この時切断面は竹に対して垂直に切られるものとします。
"""

short_bamboo = int(input())


# 1単位を作成し、参考に長さを決定する
unit = short_bamboo / 3
middle_bamboo = unit * 5
long_bamboo = unit * 7

# 合計を計算する
total = short_bamboo + middle_bamboo + long_bamboo
print(int(total))