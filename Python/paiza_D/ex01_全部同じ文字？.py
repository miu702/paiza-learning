"""
問題1 全部同じ文字？

問題

1行の文字列が入力されます。

すべて同じ文字なら "Yes"、そうでなければ "No" を出力してください。
"""
word = list(input())

check = True
sample = word[0]
for w in word:
    if(w != sample): check = False

print("Yes" if check else "No")