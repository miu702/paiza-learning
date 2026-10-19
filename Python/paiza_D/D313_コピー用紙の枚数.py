"""
あなたは資料の印刷をしています。
コピー用紙が何枚必要か計算することにしました。

資料は n ページあり m 部を印刷する必要があります。

合計で何枚のコピー用紙が必要か出力してください。
"""

# 資料のページ数と、何部なのかを定義する
pages = int(input())
number = int(input())


# 何枚の紙が必要なのか計算する
total_paper = pages * number
print(total_paper)