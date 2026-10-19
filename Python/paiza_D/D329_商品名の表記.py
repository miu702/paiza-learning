"""
あなたは商品名の表記に価格も加えることにしました。

商品名 s と価格 p が改行区切りで与えられるので商品名 s に続いて
"(" 、 価格 p、 ")" を繋げ 1 行で出力してください。
"""

# 商品名と価格を定義する
item = input()
price = int(input())
left = "("
right = ")"


# 価格表を作成する
name_tag = f"{item}{left}{price}{right}"
print(name_tag)