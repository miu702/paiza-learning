"""
あなたは N 人でカードゲームをしています。
このカードゲームは N 人のプレイヤーに 1 枚づつカードを配ります。
プレイヤー全員に配られたカードの総合点を当てたプレイヤーが勝利します。
一番早く答えた人が勝つため、その答えが合っているか検算しなくてはなりません。

カードは 1 ～ 100 の数字が書かれた「点数カード」、0 の数字が書かれた「点数 0 カード」、 
"x10" と書かれた「点数 10 倍カード」の 3 種類に分かれており、総合点は以下のように計算されます。

・点数 0 カードが ある場合、点数カードの中で最大の点を持つカードを 1 つ 0 点にする。
・点数カードの合計点を計算する。
・点数 10 倍カードがある場合、総合点は上記の合計点の 10 倍とする。
　点数 10 倍カードがない場合、総合点は上記の合計点とする。

答えた総合点が合っているかどうか判定するため、実際に総合点を計算するプログラムを書いてください。
"""

# デッキ枚数とデッキを定義する
number = int(input())
numbers = input().split()

# 特殊なカード2種がデッキにあるかチェックする
zero = "0"
ten_times = "x10"
check_zero = zero in numbers
check_ten_times = ten_times in numbers


# 特殊なカード2種を除いたデッキを作る。
re_numbers = []
for N in numbers:
    if N != zero and N != ten_times:
        re_numbers.append(int(N))


# 計算手順1、0カードの処理を行う。
re_numbers.sort()
if check_zero: re_numbers.pop()


# 計算手順2、通常カードの計算をする
sum_numbers = 0
for R in re_numbers:
    sum_numbers += R
    
# 計算手順3、x10カードの処理を行う。
print(sum_numbers * 10 if check_ten_times else sum_numbers)
