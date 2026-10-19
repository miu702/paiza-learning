"""
あなたはあるゲームのプログラムを書いています。
このゲームでは主人公の移動に応じて、 画面を左下原点でスクロールさせます。
一度に背景の全ての要素を描画すると処理が追いつかなくなってしまいました。

このため、スクロールする際に、前回の背景の描画結果をコピーし、前回の背景に無い画素のみを描画する事にしました。
画面の解像度と y 軸方向、 x 軸方向のスクロール距離が与えられます。
この時、コピーして描画量を減らした結果、どれほどの画素を描画するかを出力して下さい。
"""

# 縦の長さ、横の長さ、移動距離y、移動距離xを定義する
height, width = list(map(int, input().split()))
dy, dx = list(map(int, input().split()))


# 縦の差分、横の差分、共通部分を計算する
difference_Y = height * abs(dx)
difference_X = width * abs(dy)
common = abs(dy) * abs(dx)


# 縦の差分 + 横の差分 - 共通部分で求めることができる。
total = difference_Y + difference_X - common
print(total)
