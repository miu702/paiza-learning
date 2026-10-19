# ここだけ変更
name = "田中太郎"
price = 5000
# ここだけ変更

text = f"""
請求書

お客様: {name}

-----------------------

請求金額: {price}円
"""

with open("invoice.txt", "w", encoding="utf-8") as f:
    f.write(text)