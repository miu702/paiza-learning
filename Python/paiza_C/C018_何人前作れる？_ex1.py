"""
あなたは工作キットを作ろうとしています。

1個の工作キットを作るためには、以下の部品が必要です。

wood：木材
nail：釘
string：ひも

1個作るために必要な部品の種類と数量、そしてあなたが持っている部品の種類と数量が与えられます。

最大で何個の工作キットを作れるかを求めてください。
"""

# 材料リストを作成する
material_int = int(input())
materials = {}
for i in range(material_int):
    material, amount = input().split()
    # もし、材料リストにあるなら、追加し、ないなら新しく項目を作成する
    if material in materials:
        materials[material] += int(amount)
    else:
        materials[material] = int(amount)


# 持っているものをリストにする
have_int = int(input())
haves = {}
for j in range(have_int):
    material, amount = input().split()
    
    # もし、登場が2回目なら、追加し、1回目なら新しく項目を追加する
    if material in haves:
        haves[material] += int(amount)
    else:
        haves[material] = int(amount)


# それぞれの材料ごとに作れるセット数を計算し、最小の値が作れる最大のセット数である。
can_make = []
for material, amount in materials.items():
    
    # もし、必要なものがない時は、作れない(0)を入れることで、エラーを防ぐ！※追加
    if material in haves:
        make = haves[material] // materials[material]
        can_make.append(make)
    else:
        can_make.append(0)


# 結果を出力する
print(min(can_make))


