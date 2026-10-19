"""
ある文字列が与えられるので、その文字列の一番最後の文字が d であれば Yes を、
そうでなければ No を出力してください。
"""

# 入力を配列で定義する
words = list(input())

# 調査対象を定義して、配列の一番最後が調査対象なら、Yesを出力する。違うなら、Noを出力する。
target = "d"
print("Yes" if words[len(words) -1] == target else "No")