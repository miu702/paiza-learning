"""
あなたはある文字列から 0 から 9 のいずれかの数字の個数を数えています。

個数を数える数字 n とある文字列 s が改行区切り与えられるので
s に含まれる n の個数を出力してください。
"""

# 探す要素と候補を変数に変換する
target = input()
words = list(input())

# オブジェクトを使用して、要素をカウントする
counts = {}
for item in words:
    if item in counts:
        counts[item] += 1
    else:
        counts[item] = 1
        
        
# 記録したオブジェクトの中に探す要素があるときの出力, ないときの出力とする
print(counts.get(target, 0))

