"""
「数字を使ったゲームを考える」というグループ課題で、次のようなゲームを考えました。

プレイヤーには、ある正整数 a に関する N 個のヒントが与えられます。
あなたはプレイヤーとして、そのヒントに基づいた正整数 a を推定し、出力してください。

ヒントには、以下の 3 種類があります。
x を変数として、

・"> x" は、a が x よりも大きいことを示します。
・"< x" は、a が x よりも小さいことを示します。
・"/ x" は、a が x でちょうど割り切れることを示します。

例えば、入力例 1 では以下のヒント 3 つが与えられます。
> 30
< 40
/ 5

このヒントを読み替えると、正整数 a は 30 より大きく 40 より小さい 5 で割り切れるものだとわかります。
すなわち、入力例 1 では a = 35 とわかるので 35 を出力してください。
"""
# 入力をカットする
times = int(input())
#   const operation = lines.slice(1);

# あり得る数値の上と下を作成する。割り算は後でするので、キープする。
min_number = 1
max_number = float("inf")
queue = []

for i in range(times):
    symbol, numberStr = input().split()
    number = int(numberStr)
    
    if(symbol == ">" and number > min_number):
        min_number = number + 1
        
    elif(symbol == "<" and number < max_number):
        max_number = number
        
    elif(symbol == "/"):
        queue.append(number)


# キープした数値で全て割れたら、終了。
for j in range(min_number, max_number):
    crack = [False] * len(queue)
    for k in range(len(queue)):
        if(j % queue[k] == 0): crack[k] = True
        
    
    # all(配列名)で配列が全てTrueなのかチェックできる。
    check = all(crack)
    if(check):
        print(j)
        break

