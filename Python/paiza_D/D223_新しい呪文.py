"""
A 君は呪文 B と呪文 C を合わせた新しい呪文を唱えようとしてます。
新しい呪文は呪文 B の後ろに呪文 C を足したものです。新しい呪文を出力してください。
"""

# 呪文を作成
B = input()
C = input()


# 新しい呪文を作成
incantation = f"{B}{C}"
print(incantation)