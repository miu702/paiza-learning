"""
あるゲームの id である文字列 S が与えられます。

あるゲーム会社では id とそれ以外を区別するために 
id の最後に大文字の A を加えたものをデータベース用 id として使用しています。

データベース用 id を出力してください。
"""

# 名前と追加分を定義
player_name = input()
add = "A"


# idを出力
database_id = f"{player_name}{add}" 
print(database_id)