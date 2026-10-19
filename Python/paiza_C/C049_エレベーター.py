"""
あなたは霧島京子たちが通うパイザ女学院の用務員として、校舎に備え付けのエレベーターを管理しています。
エレベーターが一定の距離を動くと、定期点検をしなければなりません。
エレベーターの動きのログをもとに、エレベーターが何階分の距離を動いたか計算するプログラムを完成させてください。
ただし、エレベーターは最初は必ず 1 階にいるものとします。
"""

# ログの数を定義する
log_int = int(input())

# 処理に必要な変数を定義する。totalを最終出力結果に使用する。
total = 0
current = 1


for i in range(log_int):
    # 次の行き先を定義する
    next_floor = int(input())
    
    # 現在の階と行き先の大きい方 - 小さい方で移動距離を計算できる。
    upper = max(next_floor, current)
    under = min(next_floor, current)
    add_floor = upper - under
    
    
    # 移動距離を追加する。
    total += add_floor
    
    # 移動する。
    current = next_floor

# 結果を出力する
print(total)
