"""
電子決済サービス Paiza Pay は、残高が 10,000 円を切っていると自動で 10,000 円をチャージするサービスを始めることになりました。

残高が入力されるので、チャージするべきかどうか判断をし、チャージする場合はチャージ後の残高、必要ない場合はそのままの残高を出力してください。
"""
rest = int(input())

limit = 10000
if rest >= limit:
    print(rest)
else:
    add = rest + limit
    print(add)
