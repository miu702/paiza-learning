"""
スペース区切りで2つの単語が入力されるので順番を入れ替えてスペース区切りで出力してください。
"""

# 入力 → 変数に変換する。
import sys
words = sys.stdin.read().split()
A = words[0]
B = words[1]


# テンプレートリテラルを使用して、要素を入れ替える
inversion = f"{B} {A}" 
print(inversion)