"""
あなたは気象庁のデータ分析の担当者で、8 月の台風の上陸の間隔についてのデータを作るよう求められました。
サンプルとなる5 個の台風について上陸した日が与えられるので、それぞれ (2 個目以降) について直前の上陸日との間隔日数を出力してください。
"""

numbers = []
for i in range(5):
    numbers.append(int(input()))
    
for j in range(4):
    between = numbers[j + 1] - numbers[j]
    print(between)

