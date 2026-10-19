# 半角アルファベットで構成された文字列 s が与えられます。
# s に含まれる半角アルファベット 「A」 の数を出力して下さい。
words = list(input())

count_A = 0
for i in range(len(words)):
    if words[i] == "A": count_A += 1
    
print(count_A)