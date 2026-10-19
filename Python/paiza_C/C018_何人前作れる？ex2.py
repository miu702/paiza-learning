"""
問題：ゲームアイテムを作れ！
ゲーム内で「回復ポーション」を作ります。

ただし、プレイヤーが持っている素材には同じ素材が複数回登場する場合があります。
同じ素材は合計して考えてください。
"""

# 1つ作るのに必要な素材リストを作成する。今回は材料の2回目の登場があるので、考慮する。
need_int = int(input())
needs = {}
for i in range(need_int):
    item, amount = input().split()
    
    # ここで素材リストにitemが登場するか？で1回目の登場か、2回目の登場がを分岐する
    if item in needs:
        needs[item] += int(amount)
    else:
        needs[item] = int(amount)


# 持っているものをリストにする。今回は材料の2回目の登場があるので、考慮する。
have_int = int(input())
haves = {}
for j in range(have_int):
    item, amount = input().split()
    
    # ここで持っているものリストにitemが登場するか？で1回目の登場か、2回目の登場がを分岐する
    if item in haves:
        haves[item] += int(amount)
    else:
        haves[item] = int(amount)
    

# いくつ作ることができるか調査する
can_make = []

# 必要なものを1つずつループさせる。
for item in needs:
    
    # 必要なものを持っているか調査する。持っていない時は、エラーを防ぐために作れない(0)を投入する
    if item in haves:
        make = haves[item] // needs[item]
        can_make.append(make)
    else:
        can_make.append(0)
 
    
# できる量を出力する。
print(min(can_make))