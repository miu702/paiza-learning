"""
テストが返却されたので、友達同士で平均点を計算することになりました。 
人数が自分を含め 7 人なので、どうしても割り切れない場合があるため、 
小数点 1 桁まで計算し、小数点以下 2 桁目で四捨五入することにしました。
例えば入力例 1 の場合、平均点が 58.571.... と続いていくので、小数点第一位までの "58.6" を出力します。


7 人の点数が入力されるので、平均点を小数点以下 1 桁で表示してください。
"""

import sys
numbers = list(map(int, sys.stdin.read().split()))

total = 0
for number in numbers:
    total += number

length = len(numbers)
average = total / length

# roundは(数値, 小数点以下で表示する桁数：四捨五入は 小数点以下で表示する桁数 + 1で判断される)
rounded_number = round(average, 1)
print(rounded_number)