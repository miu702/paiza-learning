"""
クリスマスといえば 12 月 25 日ですが、キリスト教で用いられる教会暦では、
厳密には 12 月 25 日のすべてがクリスマスに属するわけではありません。

教会暦では、日没から次の日没までを一日として扱うので、
クリスマスは厳密には 12 月 24 日の日没から 12 月 25 日の日没までとなります。

12 月 25 日の日没の時刻および 25 日現在のある時刻が与えられるので、
25 日の現在時刻はクリスマスかどうか判定するプログラムを作成してください。
"""

# 入力 → 変数に変換する。
sunset = input().split()
current = input().split()


# 時間と分に分割する
sunset_hour = int(sunset[0])
sunset_minutes = int(sunset[1])

current_hour = int(current[0])
current_minutes = int(current[1])


# 条件に沿って出力する
if(current_hour < sunset_hour):# 時間が日没より早い。
    print("Yes")
elif(current_hour == sunset_hour and current_minutes <= sunset_minutes):# 時間が日没と同じかつ、分が同じか、早い。
    print("Yes")
else:
    print("No")
    
