"""
あなたは単純な運賃計算のプログラムを作成しています。

その運賃計算は以下のルールで行われます。

・初乗り運賃 100 円
・1 区間ごとに 10 円ずつ加算

ある乗客の乗った区間数 N が与えられるので運賃がいくらかを出力するプログラムを作成してください。
"""

section = int(input())

initial_fare = 100
coefficient = 10

total = initial_fare + coefficient * section
print(total)