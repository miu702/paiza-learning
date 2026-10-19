"""
あなたは出先から帰ろうとしたところ、電車が止まっていたのでタクシーを使うことにしました。
タクシーの初乗り運賃は 500 円で、3 kmより長く走るとそこからは運賃が 1km あたり K 円加算されます。

タクシーの走行距離 D と運賃 K 円が与えられます。タクシーの運賃を出力してください。
"""

# 入力 → 変数に変換する
import sys
numbers = list(map(int, sys.stdin.read().split()))
distance = numbers[0]
add = numbers[1]


# 条件式に必要な変数を定義する
limit = 3
start = 500


# 基準値より距離が多い時、料金を追加する
if distance > limit:
    total = ((distance - limit) * add) + start;
    print(total)
elif distance <= limit:
    print(start)
