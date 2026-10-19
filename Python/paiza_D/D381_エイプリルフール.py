"""
あなたはエイプリルフールにちなんでプログラムを作成しています。

"True" と入力された場合 "False" と出力し、"False" と入力された場合 "True" と出力してください。
"""

# 入力を変数に変換する
check = input()

# 文字列として扱うことで処理を楽にする
if check == "True":
    print("False")
elif check == "False":
    print("True")