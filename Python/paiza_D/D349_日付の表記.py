"""
あなたは日付を出力するプログラムを作成しています。

改行区切りで月 m と日 d が与えられます。
「/」区切りで出力してください。
"""

# 月と日を定義する
month = int(input())
day = int(input())

# 日付をテンプレートリテラルを使用して、定義する
fullDate = f"{month}/{day}"
print(fullDate)