"""
Trick or Treat! ハロウィーンのシーズンです。
あなたの子供はわがままなのでお菓子といってもキャンディかチョコレートでないと満足してくれません。

文字列が与えられるので、これが "candy" か "chocolate" であれば "Thanks!"、
その他の場合は "No!" という子供のリアクションを出力してください。
"""

sweets = input()

if sweets == "candy" or sweets == "chocolate":
    print("Thanks!")
else:
    print("No!")
