"""
あなたは体調管理のために天気予報の最高気温、最低気温から1日の気温が
いくつ変化しているかを知りたくなりました。

ある日の最高気温 t と最低気温 u がスペース区切りで入力されるので、 
1 日の気温がいくつ変化しているかを出力してください。
"""

# 入力 → 変数に変換する
import sys
numbers = list(map(int, sys.stdin.read().split()))

# 計算に必要な値を定義する
high = numbers[0]
low = numbers[1]
s = 0

# 計算を実施する。-の時は絶対値を利用することで正しく計算できる
if(high < low):
    print("気温が不正です")
    
elif(high >= s and low >= s):
    # 両方+
    between = high - low
    print(between)
    
elif(high < s and low < s):
    # 両方-
    between = abs(low) - abs(high)
    print(between)
    
elif(high >= s and low < s):
    # 最低のみ-
    between = abs(low) + high
    print(between)
    
