"""
あなたはあるイベントのチケットの料金を計算するプログラムを作成しています。

そのイベントでは大人料金と子ども料金が設定されています。

大人料金 x 円、子ども料金 y 円、大人の人数 n 人、子どもの人数 m 人が改行区切りで
与えられるので合計でいくらになる出力してください。
"""

# 料金を定義する
adult_rate = int(input())
child_rate = int(input())

# 人数を定義する
adult_member = int(input())
child_member = int(input())


# 合計を計算し、出力する
total = (adult_rate * adult_member) + (child_rate * child_member)
print(total)

