"""
問題4 一番多い文字を探す

文字列が入力されます。

最も多く登場した文字を出力してください。
"""
words = list(input())


# 配列の要素をカウントする方法
counts = {}

# 1、配列を1回ずつループさせる。
for item in words:
    
    # 2、現在の処理要素がカウント用配列にあるか分岐させる。
    if item in counts:
        # 2-1、すでにあるとき 1回増加
        counts[item] += 1
    else:
        # 2-2、初めての要素のとき、要素を追加する
        counts[item] = 1
        

# 3、最大値を追跡するための変数
max_item = None
max_count = -1  # 回数は0以上なので、初期値は-1にしておく

# 4、オブジェクトをループするには、for キー名, バリュー名 in オブジェクト名.items()でループできる。
for item, count in counts.items():
    if count > max_count:
        max_item = item
        max_count = count
        
        
# 5、結果を出力する
print(f"最大は、{max_item}の{max_count}回です。")
    
    
    
    
    