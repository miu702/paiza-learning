"""
お菓子製造工場で働いている Bob は、小分け販売のためにお菓子を分配する作業を行っています。


作業には、 M 種類の機械が用いられます。

i 種類目の機械は、積み込まれたお菓子を m_i 個の容器に均等に分配し、余りを排出します。


Bob は、作業効率を上げるために、排出される余りが最も少なくなるようなお菓子の分配方法を知りたいと思っています。 
ただし、このような分配方法が複数あった場合には、可能な限り小分け販売できるように、
分配される容器の総数が最も多くなる方法を優先したいと考えています。

N 個のお菓子を分配するとき、 Bob の考えに沿う機械はどれでしょうか？
"""

# 機械の数、お菓子の数を定義する
machine, sweets = map(int, input().split())

# 機械の情報をまとめる
machine_info = []

# 機械の数だけ、繰り返し文をする
for i in range(machine):
    box = int(input())
    
    # 配列の中にオブジェクト形式で管理することで複数のデータを意味をわかりやすく管理する。
    machi = {}
    
    # 必要なデータを投入する。機械の番号、箱の数、余る数を投入する
    machi["id"] = i + 1
    machi["box"] = box
    machi["rest"] = sweets % box
    
    
    # 配列にオブジェクトを投入する。配列で定義することで、インデックス番号で取り出せる。
    machine_info.append(machi)



# 機械の情報を繰り返し、余りのminとすることで、最小値を取り出す。
min_rest = min(machine["rest"] for machine in machine_info)

# 最小の余りはいくつの機械があるか調査する
min_rest_machine = []
for machine in machine_info:
    if machine["rest"] == min_rest: min_rest_machine.append(machine)


if len(min_rest_machine) > 1:
    # 最大の箱の数を見つける
    max_box = max(R["box"] for R in min_rest_machine)
    
    # 最大の箱はどの機械なのか調査する
    max_id = []
    for R in min_rest_machine:
        if R["box"] == max_box: max_id.append(R) 
            
    print(max_id[0].get("id"))
else:
    # 最小の余りが1つしかない時は、そのまま出力する
    print(min_rest_machine[0].get("id"))

