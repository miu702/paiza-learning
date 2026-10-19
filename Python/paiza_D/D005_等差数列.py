#数列を出力するプログラムを作りましょう。
#初項 m が与えられ、公差 n が与えられるので 10番目までの数字をスペース区切りで出力するプログラムを作成してください。
import sys
numbers = list(map(int, sys.stdin.read().split()))

m = numbers[0]
n = numbers[1]

numbersList = [] 
for i in range(10):
    total = m + (n * i)
    numbersList.append(total)
    
print(*numbersList)