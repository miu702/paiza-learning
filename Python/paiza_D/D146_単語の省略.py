"""
ある単語が与えられるので、母音を削除した結果の文字列を出力するプログラムを作成してください。
なお、母音とは 「a, e, i, o, u」 のことを指しています。
"""

# 入力を配列で取得する
words = list(input())

# 禁止リストを作成する
not_allowed = {"a", "i", "u", "e", "o"}


# 配列を1文字ずつチェックする
output = []
for w in words:
    # 禁止リストに含まれていない時、出力用の配列に追加する
    if w not in not_allowed:
        output.append(w)

print("".join(output))

