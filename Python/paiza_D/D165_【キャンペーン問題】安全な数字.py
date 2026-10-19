"""
あなたは 4 桁のパスワードを考える上で法則性のある数字を避けようと考えています。
4 桁の数字で構成されたパスワードの文字列 s が入力されるので同じ数字が 2 つ以上存在すれば「NG」、
そうでない場合は「OK」と出力してください。

"""

# 入力 → 変数に変換する。
numbers = list(map(int, input()))


# 頻度調査を実施する。
counts = {}
for item in numbers:
    if item in counts:
        counts[item] += 1
    else:
        counts[item] = 1


# カウント数を調査し、一定値以上の要素が有ったら、強制停止
limit = 2
check = True
for item, count in counts.items():
    if count >= limit:
        check = False
        break
    
# 条件に沿って出力する
print("OK" if check else "NG")
    
    