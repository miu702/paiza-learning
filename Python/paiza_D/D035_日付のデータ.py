# スペース区切りで西暦 y 、月 m 、日 d が入力されます。
# "/" 区切りで文字列として出力して下さい。

import sys
lines = sys.stdin.read().splitlines()

numbers = lines[0].split()

year = numbers[0]
month = numbers[1]
day = numbers[2]

fullDate = year + "/"+ month + "/" + day
print(fullDate)