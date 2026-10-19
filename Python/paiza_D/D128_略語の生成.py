"""
あなたはアメリカで働くことになったので、英語の勉強をしています。
ある雑誌を読んでいると「asap」という表現が出てきて、
これは「as soon as possible」の頭文字を取って略したものであることがわかりました。

いくつかの単語からなる表現が与えられるので、
同じように単語の頭文字を前から順に並べる形で略したものを出力してください
"""

# 入力 → 変数に変換する
import sys
words = sys.stdin.read().split()


# 対象の文字リストを作成する
number = int(words[0])
word = words[1:]


# イニシャルを作成する
output = []
for w in word:
    split = list(w)
    initial = split[0]
    output.append(initial)

# 半角スペースなしで出力
print("".join(output))

