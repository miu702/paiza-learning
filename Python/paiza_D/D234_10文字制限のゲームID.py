"""
あるゲームでは名前を最大で 10 文字まで付けられます。
A 君の現在の名前が与えられるので、あと何文字付けられるか答えてください。
"""

# 名前を定義
names = list(input())


# 計算し、出力する
max_length = 10
rest = max_length - len(names)
print(rest)