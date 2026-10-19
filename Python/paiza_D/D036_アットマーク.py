# 半角小文字アルファベットで構成された文字列 S が入力されます。
# 文字列 S の中に含まれる "at" という文字列を全て "@" (アットマークに)置換して出力して下さい。

lines = input()
words = list(lines)

# aが来たら、キープし、キープ状態でが来たら、変換。
answer = []
check = False
for i in range(len(words)):
    if check:
        if words[i] == "t":
            answer.append("@")
            check = False
        else:
            answer.append("a")
            if words[i] == "a":
                check = True
            else:
                answer.append(words[i])
                check = False
            
    else:
        if words[i] == "a":
            check = True
        else:
            answer.append(words[i])
            
    
    if i - 1 == len(words) and words[i] == "a": answer.append(words[i])
    
print("".join(answer))

