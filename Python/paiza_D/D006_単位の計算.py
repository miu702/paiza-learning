#距離 n とその単位 s がスペース区切りで与えられるので、すべての距離をmmに換算し出力してください。
import sys
lines = sys.stdin.read().split()

number = int(lines[0])
unit = lines[1]

k = 1000
c = 100
m = 10

if(unit == "km"):
    change = number * k * c * m
    print(change)
    
elif(unit == "m"):
    change = number * c * m
    print(change)
    
elif(unit == "cm"):
    change = number * m
    print(change)
    