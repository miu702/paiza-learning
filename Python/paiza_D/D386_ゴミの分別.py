"""
あなたはゴミの分別をしています。

n 本の缶をゴミ袋に詰めています。ゴミ袋 1 袋あたり m 本の缶を入れることができます。

何袋のゴミ袋が必要か出力してください。
"""

# 缶の本数、袋に入る本数を定義する
cans = int(input())
included = int(input())


# 袋の数を計算し、出力する
bag = cans // included
rest = cans % included
print(bag + 1 if rest > 0 else bag)