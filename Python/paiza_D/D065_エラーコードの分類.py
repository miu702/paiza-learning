"""
あなたはある数字を受けてエラーの種類を分類するプログラムを作成しています。
各エラーは3桁の数字で表されておりそれぞれ、百の位の数値で大まかな分類が決まっています。

以下のルールで分類の名称が決められています。
・百の位が 2 であれば ok
・百の位が 4 であれば error
・それ以外全ての数字は unknown

数字が入力されるので、この3つのルールにしたがって分類の名称を出力してください。
"""

number = list(input())

allow = "2"
rejection = "4"

check = number[0]

if check == allow:
    print("ok")
elif check == rejection:
    print("error")
else:
    print("unknown")
