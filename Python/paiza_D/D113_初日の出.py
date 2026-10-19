"""

あなたは初日の出を見るために早く起きる計画を立てています。

しっかりと寝て初日の出に備えたいあなたは 8 時間寝ることに決めました。
初日の出を見るために出発する時間が与えられるので寝る時間を出力して下さい。
"""
import re
timeStr = input()


# 正規表現を利用して、数値のみを取得する
time = re.findall(r"\d+", timeStr)
hour = int(time[0])
minute = int(time[1])


# 寝る時間を計算する
sleep_time = 8
bedtime = hour - sleep_time


# 寝る時間を表示する
limit = 0
days = 24
if bedtime <= limit:
    changeHour = bedtime + days
    print(f"{changeHour}:{minute}")
elif bedtime > limit:
    print(f"{bedtime}:{minute}")
    
    
    