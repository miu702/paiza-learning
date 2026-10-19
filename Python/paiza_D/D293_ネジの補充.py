"""
あなたはネジの発注をしようとしています。

必要なネジの本数 n と現在の在庫本数 m が改行区切りで与えられるので在庫に対して
何本足りないかを出力してください。
"""

# 必要数と現在の数を定義する
need = int(input())
current = int(input())

# 不足数を計算し、出力する
rest = need - current
print(rest)