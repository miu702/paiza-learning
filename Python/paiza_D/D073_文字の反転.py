"""
アルファベット大文字で構成された文字列 S が入力されるので、文字列を反転させて出力してください。
"""

import sys

words = list(input())
words.reverse()

print("".join(words))