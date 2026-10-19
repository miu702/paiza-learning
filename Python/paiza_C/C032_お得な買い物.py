"""
paiza カードは毎日のお買い物でポイントがたまるお得なポイントカードです。
ポイントの付与基準は商品の種類によって以下のように異なります。

食料品：100円で5pts
書籍：100円で3pts
衣類：100円で2pts
その他：100円で1pt

ポイントは以下の手順で計算されます。

1. 商品の種類ごとの合計購入金額を計算する。
2. それぞれのポイント付与基準に基づき商品の種類ごとの付与ポイントを計算する。
3. 商品の種類ごとの付与ポイントを合計する。(100円未満は切り捨て)

買い物内訳と合計ポイントの例を見てみましょう。

商品 1: 食料品 200 円
商品 2: 書籍 240 円
商品 3: 食料品 120 円
商品 4: その他 460 円
商品 5: 書籍 240 円
商品 6: 衣類 3200 円

食料品合計 320 円 → 15 ポイント
書籍合計 480 円 → 12 ポイント
衣類合計 3200 円 → 64 ポイント
その他合計 460 円 → 4 ポイント => 合計ポイント → 95 ポイント
このように購入した商品の種類と金額のリストが与えられるので、その買い物で付与されるポイントの合計を求めてください。

"""
import math;

class pointCalculation:
    # 全体のポイントと、価格の合計を保存。
    def __init__(self):
        self.total_points = 0
        self.total_groceries = 0
        self.total_books = 0
        self.total_clothing = 0
        self.total_others = 0
        
        
    # 商品でそれぞれの金額へ追加する
    def buy_items(self, kinds, price):
        if kinds == 0:
            self.total_groceries += price
            
        elif kinds == 1:
            self.total_books += price
            
        elif kinds == 2:
            self.total_clothing += price
            
        elif kinds == 3:
            self.total_others += price
            
        else:
            print(f"{kinds}は商品にありません。")
        return kinds, price


    # それぞれの付与ポイントを計算する
    def sum_point(self):
        groceries_point = math.floor(self.total_groceries / 100) * 5
        books_point = math.floor(self.total_books / 100) * 3
        clothing_point = math.floor(self.total_clothing / 100) * 2
        others_point = math.floor(self.total_others / 100) * 1
        
        total = groceries_point + books_point + clothing_point + others_point
        self.add_point(total)


    # ポイントを付与する
    def add_point(self, total):
        self.total_points += total
        
        
    # 合計のポイントを出力する
    def output(self):
        return self.total_points


item_int = int(input())

# 商品リストを作成
items = [];
for i in range(item_int):
    kinds, price = map(int, input().split())
    items.append([kinds, price])


# ここでインスタンス化する。以降クラスを操作する。
point_data = pointCalculation()

# 商品を追加する
for kinds, price in items:
    point_data.buy_items(kinds, price);


# 合計ポイントを計算する
point_data.sum_point()

# 付与されたポイントを確認する
result = point_data.output()
print(result)
