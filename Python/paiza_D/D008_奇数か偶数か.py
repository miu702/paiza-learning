#正の整数 N が入力されるので、N が奇数ならば"odd" 偶数ならば"even" と出力するプログラムを作成して下さい。
number = int(input())

if(number % 2 == 0):
    print("even")
elif(number % 2 == 1):
    print("odd")