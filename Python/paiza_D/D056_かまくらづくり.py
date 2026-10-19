"""
今日は大雪、子どもたちはかまくらをつくろうとはしゃいでいます。
どれだけの体積の雪が必要かを計算してあげましょう。

かまくらは 1 辺が r1 (m) の立方体から r2 (m) の立方体分をくり抜く形でつくります。
このときかまくらの体積 (m^3)はr1^3 - r2^3で求められます。
"""

lines = input().split()

A = int(lines[0])
B = int(lines[1])

full = A ** 3
hollowOut = B ** 3

totalSnow = full - hollowOut
print(totalSnow)