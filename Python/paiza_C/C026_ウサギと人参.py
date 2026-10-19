"""
Rabbit社の社長はウサギが大好きで、 社内で1匹のウサギを飼育することにしました。
ウサギが人参を好むことは広く知られています。 また、ウサギに詳しい社員によると、
人参は糖分が多いため与えすぎるのは良くないようです。

そこで、人参は1日1本だけ与えることにし、 特に糖分が許容範囲内で質量が大きい人参を選ぶことにしました。

プログラマーであるあなたはRabbit社の依頼を受け、 1 から N で番号付けられた N 個の人参のデータを入力として、]
糖分が許容範囲内で質量の最も大きい人参を見つけるプログラムを作成することになりました。

糖分には基準値Sと許容誤差 p があり、 糖分が S - p 以上 S + p 以下ならば許容範囲内となります。
また、糖分が許容範囲内で質量の最も大きい人参 が複数ある場合は、
それらのうち番号の最も小さいものを知ることができれば十分です。
"""

# 人参の数、糖質の上限量、許容する誤差を定義する
carrots, limit_sugar_content, allowable_error = map(int, input().split())


# 人参を一つずつ調査する
allow_carrots = {}
for i in range(carrots):
    weight, sugar_content = map(int, input().split())
    check = abs(sugar_content - limit_sugar_content)
    if check <= allowable_error:
        allow_carrots[i + 1] = weight 

# オブジェクトのソートを実施して、人参の大きさ順に決める。
sorted_allow_carrots = sorted(allow_carrots.items(), key=lambda x: x[1], reverse=True)


# 人参が1つ以上するときは、1番目を出力する
if len(sorted_allow_carrots) > 0:
    print(sorted_allow_carrots[0][0])
else:
    print("not found")
    
    