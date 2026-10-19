"""
ある日、うさぎとかめがかけっこの勝負をすることになりました。

ただ走るのでは自分の勝ちは目に見えているだろう、と思ったうさぎは、
とある昔話にならって次のようなハンデをつけてあげることにしました。

・うさぎは 1 km を u 分、という一定の速さで走るが、a km 走るごとに b 分の休憩を取らなければならない
・かめは 1 km を v 分、という一定の速さで走り続ける

以下の図は、入力例 1 の入力をダイヤグラムで表したものです。

うさぎは 1 km を 2 分のペースで走りますが、2 km 走るごとに 5 分の休憩を取るので、6 km を走りきるのに 22 分かかります。

かめは 1 km を 4 分のペースで走り、休憩もしないので、6 km を走りきるのに 24 分かかります。

よって、うさぎが先にゴールするので、 `USAGI` と出力すると正答となります。
この 2 匹で L km の距離を競走するとき、どちらが先にゴールするでしょうか？
"""

import math
# 入力 → 変数に変換する
total_distance = int(input())
per_usagi, section, break_time = map(int, input().split())
per_kame = int(input())

# usagiの情報(走る時間、休憩回数、休憩時間を足すことで合計時間になる)
run_usagi = total_distance * per_usagi
rest_count = math.ceil(total_distance / section) - 1
total_usagi_time = run_usagi + rest_count * break_time

# kameの情報(休憩時間なしなので、合計距離 * 1㎞の距離で合計時間になる)
total_kame_time = total_distance * per_kame


# どっちが勝ったか？
if(total_usagi_time == total_kame_time):
    print("DRAW")
elif(total_usagi_time > total_kame_time):
    print("KAME")
elif(total_usagi_time < total_kame_time):
    print("USAGI")

