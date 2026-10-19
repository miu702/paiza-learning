#ある正の整数nが入力されます。
#正の整数1から9に整数nをそれぞれを掛けた数を半角スペース区切りで出力して下さい。

number = int(input())

numberList = []
for i in range(1, 9 + 1):
    total = number * i
    numberList.append(total)

print(*numberList)