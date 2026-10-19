# 2 次行列に対し、a × d - b × c を計算した値をこの 2 次行列の行列式とよびます。
# ある 2 次行列が与えられたときに、その行列式を求めるプログラムを作成してください。

lines = []
for i in range(2):
    line = input().split()
    lines.append(line)

A = int(lines[0][0])
B = int(lines[0][1])
C = int(lines[1][0])
D = int(lines[1][1])

determinant = A * D - B * C
print(determinant)