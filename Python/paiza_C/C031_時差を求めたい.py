"""
あなたは世界展開を目指す SNS "paizabook" を開発しているエンジニアです。
paizabook では友達が投稿した日記などを見ることが出来ますが、
ユーザの住んでいる場所によって表示される投稿時刻を修正する必要があります。

例えば、ロンドンに住んでいるユーザが現地時刻 8:30 に投稿した日記の時刻は、
日本に住んでいるユーザの画面では 17:30 と表示されなければなりません。
これは、日本の時刻がロンドンの時刻よりもちょうど 9 時間進んでいるためです。
なお、時間は 00:00 から 23:59 までの 24 時間制で表すものとします。

N 個の都市の時差を表す情報と、その中のある都市に住むユーザの日記の投稿時刻 (現地時間) が入力されるので
それぞれの都市に住むユーザの画面に表示される投稿時刻を出力するプログラムを作成して下さい。
"""

# 都市の数を定義する
number = int(input())

# 管理する都市の時間をオブジェクト形式で保持するオブジェクト形式なら、都市の名前と時間の両方を意味を付けて管理できるため。
city_list = {}
for i in range(number):
    city, difference = input().split()
    city_list[city] = int(difference)

# ユーザの情報を定義する。:で分割し、時間と分にわけ、以降の処理で活用する。
post_city, post_time = input().split()
postdata = post_time.split(":")
post_hour = int(postdata[0])
post_minutes = int(postdata[1])

# 辞書に登録されている都市を1つずつ取り出して処理する
for key, value in city_list.items():
    # 出力する時間の計算をする。(投稿時間 + 別の都市の0からの時間 - 投稿場所の0からの時間 + 24) %  24で計算できる。
    new_hour = (post_hour + value - city_list[post_city] + 24) % 24
    
    # 別の都市の時間を作成する。テンプレートリテラルを使用するときにデータ型:埋める数 桁数 データ型(数値：d)で04のようなデータも作成できる。
    new_time = f"{new_hour:02d}:{post_minutes:02d}"
    print(new_time)
    