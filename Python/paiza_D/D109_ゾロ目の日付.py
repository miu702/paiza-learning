"""
ゾロ目の日とはある日付に対して 月 と 日 に含まれる全ての桁の数字が同じものを指します。
スペース区切りで月と日が与えられるのでゾロ目の日であれば "Yes" そうでなければ "No" と出力してください。
"""

# 基本方針：入力を配列に変更してから、半角スペースを削除し、サンプルと比較することで調査する
import sys
A = list(input())
A.remove(" ")

sample = A[0]


check = True
for n in A:
    if n != sample: check = False

print("Yes" if check else "No")