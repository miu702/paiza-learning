number = int(input())


# 可能性がある最小値と最大値の初期値
possibility_min = 100
possibility_max = 200

for i in range(number):
    comparison, height = input().split() 
    
    if comparison == "ge":
    # h_i以上のとき"ge"なので、変換する変数より大きい時に変換する。
        if possibility_min <= float(height):
            possibility_min = float(height)
            
    elif comparison == "le":
    # h_i以下のとき"le"なので、変換する変数より小さい時に変換する。
        if possibility_max >= float(height):
            possibility_max = float(height)
            

# 結果を出力する    
print(possibility_min, possibility_max)

