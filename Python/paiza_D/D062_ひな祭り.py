"""
ひな祭りの準備をしましょう。あなたが持っている 10 体の人形を 
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J" で表します。

ひな壇の各段 (計 3 段) に並べる人形の数が与えられるので、
各段にならべる人形の記号を改行区切りで出力してください。
人形は必ずもとの A, B, C, ... の順番で並べます。
"""

import sys
# sys.stdin.read().split()は全ての入力を一列にする書き方
lines = sys.stdin.read().split()

# list(map(int, 対象の1次元配列))で中身を全て数値にできる
numberList = list(map(int, lines))


# 基準値を参考し、棚を作成する
referenceValue = 65
for i in range(len(lines)):
    N = []
    for j in range(numberList[i]):
        chr_w = chr(j + referenceValue)
        N.append(chr_w)
        
    
    referenceValue += numberList[i]
    print("".join(N))
    