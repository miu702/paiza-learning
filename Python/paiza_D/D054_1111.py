"""
今日はみんなで棒状のチョコレートお菓子を持ち寄るパーティーをします。
このお菓子が合計で 11 本以上あればパーティーが開催できます。

このお菓子の 1 本は数字の "1" で表され、本数分だけ "1" が連続する文字列が与えられるので、
パーティーが開催できれば "OK"、できなければあと最低で何本用意すればいいかを出力してください。
"""

lines = list(input())

referenceValue = 11
print("OK" if len(lines) >= referenceValue else referenceValue - len(lines))