#ある正の整数aとbがスペース区切りで入力されます。
#aとbを比較し大きい方の値を出力して下さい。aとbが同じ場合は「eq」と出力して下さい。
import sys
A, B = map(int, sys.stdin.read().split())

if(A == B):
    print("eq")
elif(A > B):
    print(A)
elif(A < B):
    print(B)