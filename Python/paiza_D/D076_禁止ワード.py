"""
あなたは禁止ワードが含まれるかどうかを判定するプログラムを作成しています。

禁止ワード W と判定する文字列 S が改行区切りで順に与えられるので S に W が含まれている時は "NG" 
それ以外の場合は文字列 S をそのまま出力してください。
"""

prohibited = input()
word = input()

# if 確かめる対象 in 調査対象: これで調査対象に確かめる対象が含まれているか調査できる。
if prohibited in word:
    print("NG")

else:
    print(word)