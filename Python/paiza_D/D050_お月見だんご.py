"""
あなたはお月見の準備をしています。子供 2 人にいくつお月見だんごがほしいかをたずねますが、やんちゃな子は明らかに食べきれない数のだんごを要求してきます。
付き合いきれないのであなたは 5 より大きい数字を要求された場合には 5 個しか与えないことにしました。もちろん 5 以下の場合にはその数のだんごを与えます。
必要なだんごの数を求めましょう。
"""
numbers = input().split()

total = 0
for i in range(len(numbers)):
    dumpling = min(5, int(numbers[i]))
    total += dumpling

print(total)