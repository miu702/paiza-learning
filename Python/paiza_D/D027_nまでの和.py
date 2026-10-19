# ある 2 以上の整数 n が与えられます。
# 1　から n までの 1 ずつ増加する数列の和を出力してください。

number = int(input())

total = 0
for i in range(number):
    total += i + 1

print(total)