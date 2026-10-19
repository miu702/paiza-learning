"""
台風には、台風の目と呼ばれる場所が存在します。
これは台風の中心を表し、この中にいると台風の影響を受けません。

2次元平面上において、台風を、中心は同じであるが半径は異なる2つの円でモデル化します。
2つの円の中心の座標を (xc, yc)、半径をそれぞれ r_1, r_2 (r_1 < r_2) とします。


ある人の座標を (x, y) とすると、以下をみたすとき、ある人は台風の暴風域にいると定義します。
pow(r_1, 2) <= pow(x - xc, 2) + pow(y - yc, 2) <= pow(r_2, 2)

台風の情報と複数の人の座標が与えられるので、それぞれの人に対し、暴風域にいるかどうかを判定してください。
"""

# 1、台風の位置と暴風域の大きさを計算する
xc, yc, r_1, r_2 = map(int, input().split())
point_int = int(input())
area_1 = pow(r_1, 2)
area_2 = pow(r_2, 2)


# 2、暴風域の位置にいるか調査を行う。関数形式なので、データを戻すときは、returnを使用する
def check_storm_area(xc, yc, area_1, area_2, x, y):
    current_location = pow((x - xc), 2) + pow((y - yc), 2)
    if area_1 <= current_location and current_location <= area_2:
        return "yes"
    else:
        return "no"


# 2、現在地ごとにループ処理をする。
for i in range(point_int):
    x, y = map(int, input().split())
    
    # 2-1、関数を使うときは関数の外で定義したデータを関数内で使用するときは、使用するデータを全て入れる。
    result = check_storm_area(xc, yc, area_1, area_2, x, y)
    print(result)
    
    