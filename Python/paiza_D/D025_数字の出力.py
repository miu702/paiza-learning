# ある正の整数 n が入力されます。n を 0埋め3桁 で出力してください。
# 0埋め3桁 とは2桁以下の数字の場合、左側に0を加えて3桁にすることを言います。

number = int(input())
result = str(number).zfill(3)
print(result)