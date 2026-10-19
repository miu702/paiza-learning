"""
paizaカードゲームは、複数枚の子カードそれぞれが、
1枚の親カードとの強弱関係で勝負するゲームです。

どのカードにも2つの番号が書かれています。
1つ目の番号は1から10の整数、2つ目の番号は1から4の整数で表されます。
また、2つの番号の各組み合わせは1枚だけカードの束に含まれています。
(同じカードが2枚以上存在しません)

2枚のカードの強弱関係は、次のルールによって決まります。
・1つ目の番号が大きいカードのほうが強い
・1つ目の番号が同じ場合、2つ目の番号が小さいカードのほうが強い

親カードと子カードの情報が与えられるので、それらの強弱関係を調べるプログラムを作成してください。
"""

# 親カードを定義する
parent_A, parent_B = map(int, input().split())
number = int(input())

# ターンの数だけ処理を実施する
for i in range(number):
    child_A, child_B = map(int, input().split())
    
    # 親1枚目と子1枚目が同じとき、2枚目の判断に移行する
    if(parent_A == child_A):
        
        # 2枚目のカードの小さい方が強い。
        if parent_B > child_B:
            print("Low")
        elif parent_B < child_B:
            print("High")
        
    # 親1枚目が大きい時、Highを出力する
    elif(parent_A > child_A):
        print("High")
        
    # 子1枚目が大きい時、Lowを出力する
    elif(parent_A < child_A):
        print("Low")
