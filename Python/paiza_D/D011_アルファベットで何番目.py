#A〜Z (半角英字大文字) の中から1文字入力されます。A を 1番目としてアルファベット順で何番目かを出力して下さい。
word = input()

ord_w = ord(word)
number = 65
print(ord_w - number + 1)