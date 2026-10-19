"""
魅力的な料理のレシピを手に入れたあなたは、早速調理を始めたいと思っています。
レシピには、1人前を調理するのに必要な食材とその量が載っています。

このレシピと、あなたが所持している食材とその量が与えられるので、
最大で何人前作れるかを求めてください。
"""

# 材料を辞書形式でまとめる
recipe_int = int(input())
recipes = {}# 材料保存リスト
for i in range(recipe_int):
    recipe = input().split()
    
    # 修正：辞書に追加する。同じ材料が2回来ても対応
    if recipe[0] in recipes:
        recipes[recipe[0]] += int(recipe[1])
    else:
        recipes[recipe[0]] = int(recipe[1])

# 持っているものを辞書形式でまとめる。
have_int = int(input())
haves = {}# 持っているもの保存リスト
for j in range(have_int):
    have = input().split()
    
    # 修正：辞書に追加する。同じ材料が2回来ても対応
    if have[0] in haves:
        haves[have[0]] += int(have[1])
    else:
        haves[have[0]] = int(have[1])
    
# 作れる量を調査する
can_cook = []

# Pythonでオブジェクトを繰り返すときはfor キー名, バリュー名 in オブジェクト名.items()でループする。
for material, need_amount in recipes.items():
    # 持っているものに材料があるとき、何人分あるのか調査する
    if material in haves:
        available_count = haves[material] // need_amount
        can_cook.append(available_count)
    else:
        can_cook.append(0)
        
# 材料ごとに作れる量のうち、一番少ない量が全体で作れる量なので、最小値を出力する
print(min(can_cook))
    