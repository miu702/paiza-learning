"""
あなたは数を数え上げるプログラムを作成しています。そこで「切りの良い番号」を見つけたら表示したくなりました。
「切りの良い番号」とは以下のルールを満たすものとします。

・全ての桁の数字が同じ
判定する数字 n が与えられるので条件を満たした場合は、
その数字をそのまま出力、それ以外は「No」と出力してください。

"""

# 入力 → 変数に変換する
number = list(input())
sample = number[0]


# 「切りの良い番号」かをチェックする
check = True
for N in number:
    if N != sample:
        check = False
  
    
# 結果を出力する
print("".join(number) if check else "No")

