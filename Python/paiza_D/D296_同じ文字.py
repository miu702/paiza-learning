"""
あなたは文字列に関するプログラムを書いています。

整数 n とある 1 文字 c が与えられます。文字 c を n 個並べた文字列を出力してください。
"""

# 繰り返す回数と繰り返す文字を定義する
number = int(input())
word = input()


# 繰り返し文を利用して、回数分配列に投入する
words = []
for i in range(number):
    words.append(word)


# 半角スペースなしで出力する
print("".join(words))