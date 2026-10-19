"""
バレンタインデーも終わり、あなたはホワイトデーにいくつチョコレートを用意すればよいかを計算するプログラムを作ることにしました。
もらったチョコレートが 1 つ以上であればその 3 倍の数を、 0 個であれば自分用に 1 つだけ用意することにします......。
"""

chocolate = int(input())

chocoUnder = 0
chocoUpper = 100
if(chocolate < chocoUnder or chocolate > chocoUpper):
    print("チョコの量が不正です")
else:
    coefficient = 3
    personal = 1
    check = chocolate > 0
    print(chocolate * coefficient if check else personal)