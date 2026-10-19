"""
あなたは梅雨入りを判定するプログラムを開発することにしました。
梅雨の基準は明確に決まっていませんがひとまず7日間のうちいずれかの
4日以上雨が降った場合に梅雨とすることにしました。

天気が晴れの場合 "Sunny" 、雨の場合 "Rain" とし 7 日間の天気が改行区切りで与えられるのでいずれかの
4日以上雨が降っている場合 "Yes" 、3日以下であれば "No" と出力してください。
"""

# 入力 → 配列に変換する。
import sys
weathers = sys.stdin.read().split()

# 雨の日をカウントする。
limit = 4
count = 0
for w in weathers:
    if w == "Rain":
        count += 1
        
# 条件に沿って出力する
print("Yes" if count >= limit else "No")

