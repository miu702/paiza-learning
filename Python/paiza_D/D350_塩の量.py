"""
あなたは料理をしています。

料理では 1 人前で n グラムの塩を使います。
m 人前の料理を作る時に何グラムの塩を用意すればいいか計算し出力してください。
"""

# 塩の量と人数を定義する
salt = int(input())
member = int(input())

# 合計の量を計算し、出力する
total_salt = salt * member
print(total_salt)