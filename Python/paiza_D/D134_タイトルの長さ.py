"""
あなたは本の表紙を作っています。本の表紙は最大で10文字分の幅しかありません。

表紙に印刷する文字列 S が与えられるので 10 文字ごとに改行して出力するプログラムを作成してください。
"""

# 1、入力 → 変数に変換する。今回は配列にすることで、順番に処理をする
words = list(input())


# 2、本棚を作成する
bookshelf = [] # 棚全体
row = [] # 棚1段


# 3、文字を順番に処理をする
for i in range(len(words)):
# 3-1、まず、文字を投入する。
    row.append(words[i])

# 3-2、折り返す位置に来たら、棚を棚全体に投入
    if (i + 1) % 10 == 0:
        bookshelf.append(row)
        row = []


# 3-3、最後に棚に要素があるとき、追加する 
if row:
    bookshelf.append(row)


# 4、棚を出力する
for b in bookshelf:
    print("".join(b))
