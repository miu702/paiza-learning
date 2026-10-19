"""
今日は PAIZA 6 というくじの当選番号の公表日です。

PAIZA 6 の購入者は 1 から 100 までの好きな数字を 6 つ選びます。
抽選では同様に 6 つの当選番号が発表され、購入したくじの数字と一致していた数字の数に応じて賞金が当たります。

あなたは、先日 N 枚のくじを購入しました。
プログラマーであるあなたは、N 枚の宝くじそれぞれについて、 
当選番号と一致した数字の数について調べるプログラムを書くことにしました。

なお、くじの数字は昇べきの順に並んでいるとは限りません。
"""

# 1、材料のプログラムを参考に、当たりをリストにして、手元があたりにあるか？という方針でコードを書く。
winners = list(map(int, input().split()))
bay_lottery = int(input())


# 2-1、関数には配列も投入できるので受け取る。
def hit_counts(winners, hands):
    count = 0
    
    # 2-2、手元の配列を1つずつループする。
    for hand in hands:
        # 2-3、もし、手元の数値があたりにあれば、カウント増加
        if hand in winners:
            count += 1
            
    # 2-4カウントを出力する
    return count
    

# 2、手元のくじの数だけ、繰り返し処理を実施する。
for i in range(bay_lottery):
    hands = list(map(int, input().split()))
    
    # 2-1、関数に配列をそのまま投入する。
    result = hit_counts(winners, hands)
    print(result)
