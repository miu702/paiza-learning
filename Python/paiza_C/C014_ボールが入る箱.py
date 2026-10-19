"""
半径r のお気に入りのボールを手に入れたあなたは、それを収納することができる箱を探しています。

今、n 個の箱があり、i (1 ≦ i ≦ n) 番目の箱は高さh_i、幅w_i、奥行きd_i です。各
箱においてボールの直径が、箱の高さ、幅、奥行きの3つの長さのうち
最も短いもの以下であれば、無事にボールを収納することができます。

"""

# 箱の数と、半径を定義する
box, radius = map(int, input().split())

# 直径を計算する
diameter = radius * 2

# 箱の数分、処理を継続する
for i in range(box):
    height, width, depth = map(int, input().split())
    
    # 3辺の一番短い長さが、直径以上の時、箱番号を出力する
    min_length = min(height, width, depth)
    if min_length >= diameter:
        print(i + 1)
    
    
