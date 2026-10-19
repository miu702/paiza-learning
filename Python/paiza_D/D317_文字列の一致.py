"""
2 つの文字列が改行区切りで与えられます。

2 つの文字列が同じ場合は "Yes" それ以外は "No" と出力してください。
"""

# 2つの文字列を配列に変換する
words_1 = list(input())
words_2 = list(input())


# チェック用変数を作成し、これを変化されることで、出力に利用する
check = True

# 2つの配列の長さが違うとき、確定で同じではないので、詳細に比べずに終了。
if(len(words_1) != len(words_2)):
    check = False
else:
#1つずつチェックし、違うものが見つかった時、強制終了する。
 for i in range(len(words_1)):
    if words_1[i] != words_2[i]:
        check = False
        break

# チェック用変数を参考に出力する
print("Yes" if check else "No")
 