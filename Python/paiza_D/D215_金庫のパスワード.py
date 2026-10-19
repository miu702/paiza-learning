"""
ある金庫のパスワードは paiza です。
入力された文字列 S がパスワードと一致するか調べてください。

"""

input_words = input()

# 本来のパスワードは暗号化され、入力した文字も暗号化して一致するか検査する
password = "paiza"
print("Yes" if input_words == password else "No")