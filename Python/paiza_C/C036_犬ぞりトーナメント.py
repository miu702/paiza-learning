"""
1 から 4 までのエントリーナンバーをもつ 4 人が、南極で開催される犬ぞりトーナメントレース大会に参加します。
1 回戦では、参加者は 2 組に別れて競います。各組で上位となった 2 人が 2 回戦に進出し、
2 回戦の勝者がこの大会の優勝者となります。

まず 1 回戦の組み分けが与えられます。そして 1 回戦の各参加者のタイム (秒) が、
続いて 2 回戦の各参加者のタイム (秒) がエントリーナンバーの小さい順に与えられるので優勝者と準優勝者を求めてください。

なお、1 回戦、2 回戦における各参加者のタイムはすべて異なる値となり、同着はないものとします。
"""

# 1回戦の組み合わせを変数にする
A, B = map(int, input().split())
C, D = map(int, input().split())


# 1回戦、2回戦のタイムを定義する
first = list(map(int, input().split()))
second = list(map(int, input().split()))


# 1回戦の勝者を決める。
if first[A - 1] < first[B - 1]:
    winner1 = A
else:
    winner1 = B

if first[C - 1] < first[D - 1]:
    winner2 = C
else:
    winner2 = D
    
    
# 2回戦に使用するために勝者をソートする。
final = sorted([winner1, winner2])


# 2回戦の勝者を決める
if second[0] < second[1]:
    # タイムの小さい方を優勝者とする
    champion = final[0]
    runner_up = final[1]
else:
    champion = final[1]
    runner_up = final[0]

# 結果を出力する
print(champion)
print(runner_up)
