"""
あなたの通う Paiza 小学校では、10 回同じ単語を言った後にひっかけクイズに答える
十回ゲームの変則版である N 回ゲームがはやっています。
N 回ゲームでは、 N 回同じ単語を言った後にクイズに答えます。

そこで、言うべき単語と繰り返すべき回数が与えられるのでクイズに答える前に
発言すべき文字列を出力してください。
"""

import sys
lines = sys.stdin.read().split()

# 回数と文字を定義
times = lines[0]
word = lines[1]


# 出力を作成
output = []
for i in range(int(times)):
    output.append(word)

print("".join(output))

