"""
あなたは 2 つの単語で構成される文字列を省略して表記するプログラムを作成しようとしています。

各単語の文字列 A, B が改行区切りで与えられるので、
文字列 A , B の先頭 1 文字を繋げて 1 行で出力してください。
"""

# 文字列を配列にする
import sys
words = sys.stdin.read().split()


# 1つずつ分解し、1文字目を出力用の配列に投入する
output = []
for w in words:
    output.append(list(w)[0])

# 半角スペースなしで出力する
print("".join(output))
