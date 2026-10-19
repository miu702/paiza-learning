# ティッシュ1箱が空になるまでの期間を M 日、残りの花粉症の季節を N 日が改行区切りで入力されるので、
# 花粉症の季節が終わるまでに必要なティッシュ箱の数を求めて下さい。

M = int(input())
N = int(input())

box = N // M
rest = N % M
print(box if rest == 0 else box + 1)