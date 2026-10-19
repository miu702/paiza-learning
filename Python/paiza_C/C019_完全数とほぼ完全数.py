"""
N を 2 以上の整数とし、N の約数のうち N 自身を除いたものの和を S とします。 このとき

・N = S となるような N を完全数
・|N-S| = 1 となるような N をほぼ完全数

と言うことにしましょう。ここで、|N-S| は N-S の絶対値を意味します。

たとえば、N = 28 のとき、28 の約数は 1, 2, 4, 7, 14, 28 なので、S = 1+2+4+7+14 = 28 となります。従って、28 は完全数です。
また、N = 16 のときには S = 1+2+4+8 = 15 となるので、16 はほぼ完全数です。

入力された整数が完全数かほぼ完全数かそのいずれでもないかを判定するプログラムを作成してください。
"""

# 1、平方根を計算するために、mathをインポートする
import math
N = int(input())

# 2、入力値から、調査する配列を作成する
numbers = []
for i in range(N):
    number = int(input())
    numbers.append(number)


# 3、それぞれの平方根を求める。保存するには、直前の整数。
sqrts = []
def create_sqrts(number):
    s = math.isqrt(number)
    return sqrts.append(int(s))
    
for number in numbers:
    create_sqrts(number)



# 4、約数をリストにする。重複した数値は削除する。
divisor_list = []
for k in range(len(sqrts)):
    div = []
    
    for j in range(sqrts[k]):
        if numbers[k] % (j + 1) == 0:
            div.append(j + 1)
            div.append(numbers[k] // (j + 1))
    
    
    # ここで、list(set(配列名))で重複した数値を削除している。
    input_div = list(set(div))
    divisor_list.append(input_div)



# 5、約数のうち、自身の数値以外を足し、条件に沿って出力する。
for divisor in range(len(divisor_list)):
    total = 0
    
    # 5-1、全て足す。
    for d in divisor_list[divisor]:
        total += d
    
    # 5-2、自身を引く。
    total -= numbers[divisor]
    
    
    # 5-3、条件に沿って出力する
    if total == numbers[divisor]:
        print("perfect")
        
    elif abs(total - numbers[divisor]) == 1:
        print("nearly")
        
    else:
        print("neither")
        