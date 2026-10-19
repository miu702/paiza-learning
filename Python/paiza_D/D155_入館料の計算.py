"""
あなたは N 人である街を観光していて、博物館を見学することを計画しています。
その博物館は、ある一定以上の人数の団体であれば団体料金が適用され、
入館料が個人料金の場合よりも安くなります。

団体料金が適用される人数の下限と、個人料金および団体料金がそれぞれ一人あたり
いくらであるかが与えられるので、入館料が総額いくらであったかを求めるプログラムを
作成してください。

"""

# 入力 → 1次元配列に変換する。
import sys
numbers = list(map(int, sys.stdin.read().split()))


# インデックス番号から、変数に変換する
people = numbers[0]
under_people = numbers[1]
group = numbers[2]
person = numbers[3]


# 条件に沿って出力する
if people >= under_people:
    total_price = group * people
    print(total_price)
    
elif people < under_people:
    total_price = person * people
    print(total_price)
    
    