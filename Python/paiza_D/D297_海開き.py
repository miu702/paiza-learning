"""
あなたは海水浴のための海開きの日を検討しています。

海開きの基準を 3 日間の水温が全て 20 度以上の場合とすることにしました。
3 日間の水温が改行区切りで与えられるので海開きの基準を満たしていれば "OK" 
そうでない場合は "NG" と出力してください。
"""

# 入力 → 変数に変換する。同時に数値にする
import sys
temperature = list(map(int, sys.stdin.read().split()))


# 全ての数値をチェックし、基準値未満なら、強制終了する
limit = 20
check = True
for T in temperature:
    if T < limit:
        check = False
        break
    
# 条件に沿って出力する
print("OK" if check else "NG")

