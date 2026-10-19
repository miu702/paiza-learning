"""
あなたは五輪のメダリスト表の作成係です。
金・銀・銅メダリストの国名・選手名が順番に与えられるので、それぞれの国名・選手名の前に獲得メダル ("Gold", "Silver", "Bronze") を記していきましょう。
"""
names = []
for i in range(3):
    names.append(input())

medal = ["Gold", "Silver", "Bronze"]
for j in range(3):
    print(f"{medal[j]} {names[j]}")