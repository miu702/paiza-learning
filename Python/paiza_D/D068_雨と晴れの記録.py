"""
あなたは文字列として記録された天気の分析をしています。
その文字列は晴れの日を "S" 雨の日を "R" とし、 1 日ごとに記録していった長さ n の文字列です。


文字列に記録された晴れの日数と、雨の日数をスペース区切りで出力してください。
"""

number = int(input())
weathers = list(input())

sunny = 0
rainy = 0

for w in weathers:
    if w == "S":
        sunny += 1
    elif w == "R":
        rainy += 1

print(sunny, rainy)