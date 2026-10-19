"""
あなたは忘年会の幹事を任されました。
お店を予約しようと考えましたが、お酒を飲まない人がおり、
お酒飲み放題をつけなくていい人が居ることに気が付きました。

お酒飲み放題がある場合は 6000 円、お酒飲み放題がない場合は 4000円のお店において
お酒飲み放題をつける人数が n 人、お酒飲み放題をつけない人数が m 人
それぞれ与えられるので合計が何円かを出力してください。

"""

# 入力 → 変数に変換する
import sys
numbers = list(map(int, sys.stdin.read().split()))

# お酒ありとお酒なしの人数を変数に変換する
alc = numbers[0]
not_alc = numbers[1]

# それぞれの値段を定義する
alc_price = 6000
not_alc_price = 4000

# 合計を計算し、出力する
total = alc * alc_price + not_alc * not_alc_price
print(total)

