"""
あなたはお祭りで金魚すくいをすることにしました。 そこのお店では耐久値が x のポイがあります。 
ポイは重量 w の金魚をすくったとき耐久値が w 減り、耐久値が 0 になった瞬間壊れます。
ポイが壊れた場合、そのときの金魚はすくうことができません。

あなたは N 個のポイを順に使って 1 番目の金魚から M 番目までを順番にすくうことにしました。
すべてのポイが壊れるまでにすくうことのできる金魚の数を答えるプログラムを作成してください。


入力される値
入力は以下のフォーマットで与えられます。

M N x
w_1
w_2
...
w_M
・1 行目に金魚の数を表す整数 M、ポイの数を表す整数 N、ポイの耐久値を表す整数 x がこの順に半角スペース区切りで与えられます。
・続く M 行のうちの i 行目 (1 ≦ i ≦ M) には金魚の重量を表す整数 w_i が与えられます。
・入力は合計で M + 1 行となり、入力値最終行の末尾に改行が 1 つ入ります。


期待する出力
・すくうことのできる金魚の数を整数で出力してください。
・末尾に改行を入れ、余計な文字、空行を含んではいけません。



条件
すべてのテストケースにおいて、以下の条件をみたします。
・1 ≦ M ≦ 50
・1 ≦ N ≦ 10
・1 ≦ x ≦ 100
・1 ≦ w_i ≦ 25 (1 ≦ i ≦ M)
"""


# 入力を変数に変換する
goldfish_int, poi, poi_durability = map(int, input().split())
goldfishs = []
for i in range(goldfish_int):
    goldfish = int(input())
    goldfishs.append(goldfish)


# ポイを作成する。
pois = [poi_durability] * poi

# ポイと金魚のindex
poi_index = 0
goldfish_index = 0

# while文の続行用
check = True
# 取った金魚の合計
total = 0

while check:
    # 今のポイと金魚
    current_poi = pois[poi_index]
    current_goldfish = goldfishs[goldfish_index]

    # 今の金魚が取れるか。
    if (current_poi > current_goldfish):
    # 取れる。
    # 取れた数、金魚の位置を変更、今のポイの耐久度低下。
        total += 1
        goldfish_index += 1
        pois[poi_index] -= current_goldfish
        
        # 全ての金魚を取ったら、終了。
        if (goldfish_index == len(goldfishs)):
            print(total)
            check = False
            break
    else:
    # 取れない。
    # ポイを破る。
        pois[poi_index] = 0
        poi_index += 1

        # ポイが全て壊れたら終了。
        if (poi_index == len(pois)):
            print(total)
            check = False
            break


