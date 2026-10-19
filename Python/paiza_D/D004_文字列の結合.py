#半角アルファベットのみで構成された長さmの文字列s_iがn行入力されます。
#「Hello」に文字列s_iを入力された順に「,」で結合したものを半角スペースで結合し、末尾に「.」を結合した文字列を出力するプログラムを作成してください。
import sys
lines = sys.stdin.read().splitlines()

words = lines[1:]

sentence = ["Hello "]
for i in range(len(words)):
    if i == len(words) - 1:
        sentence.append(words[i] + ".")
    else:
        sentence.append(words[i] + ",")
        
print(*sentence, sep="")