"""
あなたはとあるゲームのプレイヤーです。このゲームでは課金アイテムの使用者の ID が公開されるため、
個人的な興味から課金アイテムの使用回数が一番多い人を調べようとしています。

プレイヤー ID が整数で与えられるので、一番多く出現するプレイヤー ID を出力して下さい。
一番多く出現するプレイヤー ID が複数ある場合は昇順に全て出力して下さい。

入力例 1 の場合、1 が 2 個, 2 が 2個, 3 が 1個 であり、一番多く出現する ID が
1, 2 の二つであるため、"1 2" と出力してください。


入力例 2 の場合、1 が 3 個, 2 が 1個, 3 が 1個 であり、一番多く出現する ID が
1 のみであるため、"1" を出力してください。
"""
times = int(input())
items = list(map(int, input().split()))


counts = {}
# アイテムを1つずつ取り出す。
for item in items:
    
    # カウント配列にアイテムがあるか、確認する
    if item in counts:
        counts[item] += 1
    else:
        counts[item] = 1
        
# 最大値を追跡するために変数を作成する。回数は0以上なので、初期値は-1にしておく
max_count = -1

# for キー名, バリュー名 in オブジェクト名.itemsでループできる。
for item, count in counts.items():
    if count > max_count: max_count = count
    

# 最大値の要素を取得する
max_items = []
for item, count in counts.items():
    if count == max_count: max_items.append(item)
    

# 配列を半角スペースありで出力するが、中身が数値のため、文字列にしてから出力する
max_items.sort()
print(" ".join(map(str, max_items)))

