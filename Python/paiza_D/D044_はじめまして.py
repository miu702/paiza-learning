"""
はじめましてのあいさつをしましょう。

名前が文字列 s1 で、性別が文字列 s2 (男性は "M", 女性は "F") で与えられます。
これに対し、男性なら "Hi, Mr. 〇〇(名前)" と、女性なら "Hi, Ms. 〇〇(名前)" と返してください。
"""
lines = input().split()

name = lines[0]
gender = lines[1]

if gender == "F":
    print(f"Hi, Ms. {name}")
elif gender == "M":
    print(f"Hi, Mr. {name}")