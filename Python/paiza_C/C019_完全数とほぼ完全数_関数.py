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


# 3、関数を利用して、機能をまとめる。Pythonでの関数の定義の仕方はdef 関数名(引数)
def judge(number):

    
# 3-1、平方根を求める。保存するのは、直前の整数。isqrt()はmath.sqrt()と違い、直前の整数を返すので、今回の問題ではこのまま使える。
    s = math.isqrt(number)
    
    
# 3-2、1~直前で求めた整数まで約数を求める。
    div = []
    for j in range(s):

# 3-3、+1して、0で計算することを防ぐ。
        if number % (j + 1) == 0:
            div.append(j + 1)
            div.append(number // (j + 1))
    
# 3-4、約数は重複しないので、list(set(配列名))で重複した数値を削除する。
    div = list(set(div))
    
    
# 3-5、求めた約数のうち、自分以外の数値以外を足し、条件に沿って出力する。
    total = 0
    for d in div:

# 3-5-1、全て足す。
        total += d
        
# 3-5-2、自身を引く。
    total -= number
        
# 3-5-3、条件に沿って出力する
    if total == number:
        return "perfect"
            
    elif abs(total - number) == 1:
        return "nearly"
            
    else:
        return "neither"



# 3、それぞれの数値ごとに調査する。Pythonで関数を使うときは、関数名(引数)で呼び出す。
for number in numbers:
    result = judge(number)
    print(result)
    
    