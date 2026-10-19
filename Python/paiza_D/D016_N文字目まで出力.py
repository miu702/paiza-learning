#半角アルファベットで構成された文字列 S と正の整数 N 入力されます。1文字目から N 文字目までを出力して下さい。

word = input()
number = int(input())

wordList = list(word)
cutWord = wordList[:number]
join = "".join(cutWord)
print(join)