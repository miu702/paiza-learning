"""
あなたは小学校一年生の先生です。今週の授業で、足し算と引き算を教えます。
あなたは、足し算と引き算を用いた宿題を作る必要があり、そのためのプログラムを書くことにしました。

以下の手順で問題をランダム生成するプログラムはもうできているのですが、
その答えを求めるプログラムはまだできていません。答えを求めるプログラムを書いてください。

[問題生成の手順]

1. 正しい式 a + b = c, あるいは a - b = c (a, b, c, は整数) を生成する
2. a, b, c のうちいずれか 1 つを空欄にする

この空欄に入れるべき整数が「答え」となります
"""

# 式を変数に分解する
AStr, op, BStr, eq, CStr = input().split()


# 条件に沿って出力する
if AStr == "x":
    B = int(BStr)
    C = int(CStr)
    if op == "+":
        X = C - B
        print(X)
        
    elif op == "-":
        X = B + abs(C)
        print(X)
        
    else:
        print("計算式が不正です。")
        
    
elif BStr == "x":
    A = int(AStr)
    C = int(CStr)
    if op == "+":
        X = C - A
        print(X)
        
    elif op == "-":
        X = A - C
        print(X)
        
    else:
        print("計算式が不正です。")
        
    
elif CStr == "x":
    A = int(AStr)
    B = int(BStr)
    if op == "+":
        X = A + B
        print(X)
        
    elif op == "-":
        X = A - B
        print(X)
        
    else:
        print("計算式が不正です。")
    
else:
    print("xが不正な位置です。")
    
    