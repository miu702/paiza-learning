#半角アルファベット文字列 s と 整数 n が入力されます。
#文字列 s の1番左の文字を 1 文字目とし n 文字目のアルファベットを出力して下さい。

#import sysで一気に標準入力をする
import sys
lines = sys.stdin.read().split()

#インデックス番号を利用して、要素を指定する
word = lines[0]
number = int(lines[1])

#list(要素)をすることで、.split("")と同じことをしている。
splitWord = list(word)

#結果を出力する
print(splitWord[number - 1])