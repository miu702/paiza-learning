"""
あなたはコンピュータを使って非常に重たい計算をしています。
画面には計算があと何時間で終了するかが表示されていました。

これが何日に相当するかを出力してください。
ただし、数日ピッタリで計算が終了するとは限りません。
計算が終了している最小の日数を出力してください。

つまり、40 時間であれば 1 日と 16 時間なので 2 日となります。
"""
hour = int(input())
dayTime = 24

month = hour // dayTime
rest = hour % dayTime

if rest > 0:
    print(month + 1)
elif rest == 0:
    print(month)
