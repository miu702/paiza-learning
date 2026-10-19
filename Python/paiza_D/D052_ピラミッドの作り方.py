"""
あなたのクラスでは、運動会の出し物で人間ピラミッドをやることになりました。
ある段数のピラミッドを組むのに必要な人数を求めるプログラムをつくりましょう。

ピラミッドでは以下のように上から i 段目には i 人が必要となります。
"""

number = int(input())

people = 0
for i in range(number):
    human = i + 1
    people += human

print(people)