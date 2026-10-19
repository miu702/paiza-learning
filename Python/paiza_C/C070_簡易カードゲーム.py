"""
あなたは、1 から 9 の数字が書かれたカードを用いて、簡易的なポーカーで遊ぶことにしました。
この簡易ポーカーでは手札が 4 枚で、この 4 枚の組み合わせにより以下の 5 種類の役が存在します。

・「Four Card」 ...... 同じ数字 4 枚からなる役
・「Three Card」 ...... 同じ数字 3 枚とそれ以外の数字 1 枚からなる役
・「Two Pair」 ...... 同じ数字 2 枚のペア 2 つからなる役
・「One Pair」 ...... 同じ数字 2 枚とそれ以外の相異なる数字 2 枚からなる役
・「No Pair」 ...... 上の 4 つ以外（4 枚が全て相異なる数字）

簡易ポーカーの手札 4 枚の数字を小さい順に並べたものが N 個与えられるので、
それぞれ上の 5 通りのうちどの役にあたるかを判定するプログラムを作成してください。


入力される値
入力は以下のフォーマットで与えられます。

N
s_1
s_2
...
s_N
・1 行目に、ポーカーの手札の個数を表す整数 N が与えられます。
・続く N 行のうちの i 行目 (1 ≦ i ≦ N) には、i 番目の手札の情報を表す 4 個の数字からなる文字列が与えられます。
i行目の文字列 s_i の j 番目 (1 ≦ j ≦ 4) の文字 s_{i, j} は、i
番目の手札の j 番目のカードに書かれた数字が s_{i, j} であるということを表します。
・入力は合計で N + 1 行となり、入力値最終行の末尾に改行が 1 つ入ります。


期待する出力
・それぞれの手札の役を以下の形式で出力してください。
N
s_1
s_2
...
s_N
・期待する出力は N 行からなります。
・i 行目 (1 ≦ i ≦ N) にはそれぞれ i 番目の手札の役を表す文字列として
　・「Four Card」
　・「Three Card」
　・「Two Pair」
　・「One Pair」
　・「No Pair」
のいずれかを出力してください。
出力最終行の末尾に改行を入れ、余計な文字、空行を含んではいけません。



条件
すべてのテストケースにおいて、以下の条件をみたします。

・1 ≦ N ≦ 400
・1 ≦ s_{i, 1} ≦ s_{i, 2} ≦ s_{i, 3} ≦ s_{i, 4} ≦ 9 (1 ≦ i ≦ N)


入力例1
8
7777
2229
5566
2669
1689
1333
1189
3588


出力例1
Four Card
Three Card
Two Pair
One Pair
No Pair
Three Card
One Pair
One Pair


入力例2
2
1234
1234


出力例2
No Pair
No Pair
"""

# 入力 → 変数に変換する
times = int(input())
cards = []

for i in range(times):
    card = input()
    cards.append(card)



# ハンドの数だけ役を調査。
for card in cards:
    # 1、役を宣言する
    role_list = {
      "Four_card": 0,
      "Three_card": 0,
      "Two_pair": 0,
      "One_pair": 0,
    }

    # 2、カードの種類をカウント
    counts = {}
    hand = list(card)
    for H in hand:
        # 2、1枚ずつカードの種類を調査
        if H in counts:
            counts[H] += 1
        else:
            counts[H] = 1
    
    # 3、カードの種類から役に当てはまるか調査する。
    pair = 0
    for key, values in counts.items():
        # 役チェック(ペア以上)
        if values == 4:
            role_list["Four_card"] += 1
        elif values == 3:
            role_list["Three_card"] += 1
        elif values == 2:
            pair += 1
    
    # 役チェック(ペアの数)
    if pair == 2:
        role_list["Two_pair"] += 1
    elif pair == 1:
        role_list["One_pair"] += 1
    
    # 4、最終的な役を出力する
    check = False
    for role, number in role_list.items():
        if(role == "Four_card" and number == 1):
            print("Four Card")
            check = True
        elif(role == "Three_card" and number == 1):
            print("Three Card")
            check = True
        elif(role == "Two_pair" and number == 1):
            print("Two Pair")
            check = True
        elif(role == "One_pair" and number == 1):
            print("One Pair")
            check = True
    
    if(check == False): print("No Pair")

