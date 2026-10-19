"""
あなたはあるゲームをプレイしています。

プレイヤーはスタミナのポイント N を所持しており1プレイあたり M ポイントずつ消費されます。
プレイヤーのスタミナと1プレイあたりの消費ポイントがスペース区切りで与えられるので
何回プレイ出来るかを出力してください。
"""

# 入力 → 変数に変換する。
import sys
numbers = list(map(int, sys.stdin.read().split()))


# スタミナと1回のプレイ料金を定義
stamina = numbers[0]
playOnce = numbers[1]


# プレイできる回数を計算する
times = stamina // playOnce
print(times)

