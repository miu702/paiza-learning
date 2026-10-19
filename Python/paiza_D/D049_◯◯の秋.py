"""
あなたは、「わたしの秋は◯◯の秋」というアンケートの集計を任されました。
アンケートの回答はまちまちで、「◯◯の秋」と書く人もいれば「◯◯」の部分だけ書く人もいます。
これでは不便なのでまず「◯◯」の部分だけを取り出すプログラムを作りましょう。
"""

words = list(input())

cutWord = words[len(words) - 5:]
check = "".join(cutWord)
sample = "noaki"

if check == sample:
    molding = words[:len(words) - 5]
    print("".join(molding))
    
else:
    print("".join(words))