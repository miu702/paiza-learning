"""
PAIZA 君は、年齢 15 歳、体重 60 kg です。

今日は、スカイダイビング体験にやってきました。
スカイダイビング体験に参加するには、以下の条件を満たす必要があるそうです。

・年齢が A 歳以上であること
・体重が W kg 以下であること

PAIZA 君が、スカイダイビング体験に参加できるか否かを出力してください。
"""

# PAIZA君のデータを入力から変数にする
import sys
numbers = list(map(int, sys.stdin.read().split()))
limit_age = numbers[0]
limit_weight = numbers[1]


# 条件式に使用する値を定義する
A_age = 15
A_weight = 60

# 両方の条件を満たすとき、Yes。満たさない時、Noを出力する
print("Yes" if (A_age >= limit_age) and (A_weight <= limit_weight) else "No")


