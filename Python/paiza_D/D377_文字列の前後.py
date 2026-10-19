"""
あなたはある文字列 S の前後 1 文字を削除して出力するプログラムを作成しています。

文字列 S の先頭と末尾の 1 文字ずつ削除した文字列を出力してください。
"""

# 文字列を定義する
word = input()

# 切り取る位置を定義する
size = len(list(word))
left = 1
right = size - 1

# 文字列を切り取り、出力する
output = word[left:right]
print(output)