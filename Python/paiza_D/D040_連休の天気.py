# あなたは7日間の連休をもらいましたが、降水確率が 30% 以下ならば外に出掛ける事に決めました。
# 7日間の降水確率(%)が改行区切りで入力されるので、出掛ける日数の合計を出力してください。

numbers = []
for i in range(7):
    number = int(input())
    numbers.append(number)


standard = 30
count = 0
for j in range(len(numbers)):
    if numbers[j] <= standard: count += 1

print(count)