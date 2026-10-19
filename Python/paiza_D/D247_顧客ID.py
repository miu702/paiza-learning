"""
ある銀行では顧客がつけたニックネームを表す文字列 S の先頭の文字と
最後の文字をつなぎ合わせた文字列 X にランダムな数字を加えたものを ID にしています。

文字列 X を出力してください。
"""

# ユーザ名を定義
user_name = input()


# 名前を作成する
processing = list(user_name)
first = processing[0]
last = processing[len(processing) - 1]


user_id = f"{first}{last}"
print(user_id)