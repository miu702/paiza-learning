"""
あなたはエイプリルフールに冗談で書かれたソースコードを修正する作業に追われています。
そのソースコードは「True」と書くべきところが全て「False」となっています。


文字列が 1 行で与えられるので文字列に含まれる「False」を「True」に置き換えて出力してください。
置き換えが必要ない場合もそのまま文字列を出力してください。
"""

words = input()

subject = "False"
change = "True"

replacement = words.replace(subject, change)
print(replacement)