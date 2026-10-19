"""
あなたは拾った古いパソコンで画像を表示するため、
グレースケールの画像を白黒の二値画像に変換する事にしました。

グレースケールの画像では 255 (白) から 0 (黒) の 256 階調で画像を表現します。
0 に近いほど黒色に, 255 に近いほど白色に近い色になります。
二値画像では単純に 1 (白) から 0 (黒) の 2 階調で表現します。
このため、グレーな画素値を白か黒にする必要があります。 (画素とは画像の最小単位の点を表します)

今回は単に表示するだけなので、単純に以下の条件を用いて二値画像に変換します。

・画素値が 128 以上 : 1 (白)
・画素値が 127 以下 : 0 (黒)

入力で画像のサイズとそれぞれの画素値が渡されるので、
与えられた条件で二値化した結果を出力して下さい。

"""

# 縦と横の大きさを定義する
height, width = map(int, input().split())

# 元画像を作成する
image = []
for i in range(height):
    row = list(map(int, input().split()))
    image.append(row)

# 画像作成に必要な変数を作成する
new_image = []
low = 0
limit = 128
high = 255

# 新しい画像を作成する
for y in range(height):
    new_row = []
    for x in range(width):
        if image[y][x] >= low and image[y][x] < limit:
            new_row.append(0)
        elif image[y][x] >= limit and image[y][x] <= high:
            new_row.append(1)
    new_image.append(new_row)


# 半角スペースありで出力する。配列の中は文字列である必要がある。
for i in range(len(new_image)):
    print(" ".join(map(str, new_image[i])))
        