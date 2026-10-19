"""
あなたは入力された文字を短冊に印刷するプログラムを作成しています。

短冊には3行の文字列が印刷されます。
印刷する短冊の長さは 3 行のうち最も長い文字列 1 文字あたり 1 cmの長さとなります。

3行の短冊に印刷される文字列が入力されるので印刷される短冊の長さを出力してください。

"""

# 入力 → 1次元配列に変換する。
import sys
words = sys.stdin.read().split()


# 初期値を0として配列の要素数の最大を求める
max_length = 0;
for w in words:
    length = len(list(w))
    if max_length < length: max_length = length

print(max_length)

