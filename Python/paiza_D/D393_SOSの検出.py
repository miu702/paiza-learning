"""
あなたは通信データからSOSの信号を探すプログラムを作成しています。

長さ n の文字列 S が与えられるので "SOS" という文字列が含まれていれば "YES" 
含まれていなければ "NO" と出力してください。
"""

# 通信データを定義する
number = int(input())
words = input()


# 条件に沿って出力する
target = "SOS"
print("YES" if target in words else "NO")
