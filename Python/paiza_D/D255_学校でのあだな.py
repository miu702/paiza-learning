"""
A 君の名前である、文字列 S が与えられます。
A 君の学校では名前の先頭と末尾に A 君の好きな物の文字列 X を加えた文字列をあだなにして呼びあいます。

A 君の学校でのあだなを求めてください。
"""

# 名前と好きなものを定義する
name = input()
like = input()


# ニックネームを定義する
nickname = f"{like}{name}{like}"
print(nickname)