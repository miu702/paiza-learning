"""
あなたは連休に N 日間の旅行にいく計画を立てています。降水確率の予報を見て、 
N 日間の降水確率の平均が最も低くなる日程を選びます。

例)
連休: 7 日間 (19 日から 25 日)
旅行日数: 3 日間
各日付の降水確率: 上図

→旅行日程: 22日 - 24日

このような形で連休の日数、旅行の日数および各日付の降水確率が与えられたとき、 
降水確率の平均が最も低くなる日程を求めてください。

なおこのような日程が複数あった場合はそのうち最も早いものを出力してください。
"""

# 全体の日数と旅行する日数を定義する
days, trip = map(int, input().split())


# 全体のデータを整理して、処理をしやすい形にする
precipitation = []
for i in range(days):
    day, rain = map(int, input().split())
    precipitation.append([day, rain])


# 全体の方針：部分和の計算を実施するので、スライディングウインドウを使用する。
# 1、まず条件を満たす1つ目のデータを作成する
total = []
sum_rain = 0
for j in range(trip):
    sum_rain += precipitation[j][1]
total.append(sum_rain)


# 2、2番目以降のデータを作成する。処理回数は全体のデータ数 - 処理に必要なデータ数とする
for k in range(days - trip):
    # 3、左のインデックス番号は通常の動き、右のインデックス番号は必要なデータ数 + 左とすることで1つずつデータがうごく。
    right = trip + k
    left = k
    
    # 4、いままでのデータを活用して、計算する。
    sum_rain += precipitation[right][1]
    sum_rain -= precipitation[left][1]
    total.append(sum_rain)
    

# 5、本来、平均を求めるが、合計値でも求めることができるため、そのまま出力する。もし、平均を使用するときは、平均用配列を作成すると便利。
start = total.index(min(total))
end = start + trip - 1

print(precipitation[start][0], precipitation[end][0])
    