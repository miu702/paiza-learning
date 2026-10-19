"""
あなたはブログのタイトルを入力させるプログラムを作成しています。
ブログのタイトルの長さは 20 文字以内に収めると決まっており1文字でも超えた場合はエラーを出すことにしました。

タイトルの長さが 20 文字以内であれば「OK」、21文字以上の場合「NG」と出力してください。
"""

words = list(input())

# 20文字以内なら、OKと出力
upper = 20
under = 0
print("OK" if len(words) <= upper and len(words) > under else "NG")    