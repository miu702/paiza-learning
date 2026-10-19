"""
あなたはトイレットペーパーの在庫を管理しています。

残りが n ロール以下になった時に m ロール買い足します。

買い足す基準のロール数 n 、買い足すロール数 m 、現在のロール数 x が
改行区切りで与えられるので上記のルールで買い足した後のロール数を出力してください。
"""

# 基準、買い足す数、現在の数を定義する
standard = int(input())
add = int(input())
current = int(input())


# 条件に沿って出力する
print(current + add if current <= standard else current)