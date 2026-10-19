"""
あなたはサーバ管理者です。 日々洪水のように流れるログを追っています。
とうとう自分の目と頭では処理しきれない量になってしまったため、プログラムを作って、
重要な文字列を含むログだけ抽出する事にしました。

例えば、入力例 2 では、ログは上から順に "pizza"、 "paiza"、 "aizu"、 "ai"、 "sai" の 5 つです。
この 5 つのログに対して、重要な文字列 "ai" が含まれているのは "pizza" 以外の 4 つです。
結果として "pizza" だけが除かれ、 "paiza"、 "aizu"、 "ai"、 "sai" がこの順に抽出されます。



このように、ログと重要な文字列が与えられたとき、重要な文字列が含まれているログを抽出して出力するプログラムを作成してください。
重要な文字列が含まれていない場合は "None" と出力してください。
"""

# ログの数と重要な文字列を定義する
number = int(input())
target = input()

# ログの全てを配列に変換する
words = []
for i in range(number):
    word = input()
    words.append(word)
    
    
# ログをチェックし、重要なもじが含まれるもののみを別の配列に投入する
allow = []
for W in words:
    if target in W:
        allow.append(W)
        

# 条件に沿って結果を出力する
if len(allow) > 0:
    for A in allow:
        print(A)
else:
    print("None")
    
    