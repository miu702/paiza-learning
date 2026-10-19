"""
あなたは電池が必要な機器のために電池を買うことにしました。

その機器に必要な本数 n と購入した電池の本数 m が与えられるので
毎回 n 本すべてを取り替える場合に何回交換可能かと余る本数を改行区切りで出力して下さい。

"""

# 入力 → 変数に変換する。
need = int(input())
buy = int(input())


# 条件に沿って出力する
times = buy // need
rest = buy % need
print(times)
print(rest)