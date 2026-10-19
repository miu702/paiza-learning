"""
あなたは住所の表示をするプログラムを作成しています。
番地、住居番号、部屋番号の3つの数字が改行区切りで入力されるので「-」区切りで出力してください。
"""

# 入力 → 変数に変換する。
import sys
numbers = list(map(int, sys.stdin.read().split()))

# テンプレートリテラルを使用して、出力を定義
address = f"{numbers[0]}-{numbers[1]}-{numbers[2]}"
print(address)