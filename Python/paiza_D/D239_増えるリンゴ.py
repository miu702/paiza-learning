"""
かごの中に N 個のリンゴがあり、 1 日に 1 個ずつ増えていきます。10 日後のリンゴの数はいくつですか？
"""

# 初期のリンゴの数を定義
start = int(input())


# 増え方、日数を定義し、ループする。一気に足しても、OK。
apple_add = 1
days = 10
goal = start
for i in range(days):
    goal += apple_add
    

print(goal)
