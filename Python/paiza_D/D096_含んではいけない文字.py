"""
あなたは大文字小文字を含む英字アルファベットで
構成される文字列Sを人に伝える際に手書きで渡したところ
「I」(大文字のアイ)と「l」(小文字のエル)と「i」(小文字のアイ)の取り違えが発生してしまいました。

こういったミスを防ぐために、これらの文字がいずれか1つ以上含まれる場合は警告を出す
プログラムを作成することにしました。
"""

word = input()
prossing_word = list(word)

# どれかがある？なので、checkは1つでOK。
check = False
for p in prossing_word:
    if(p == "I" or p == "l" or p == "i"):
        check = True
        break;
    
print("caution" if check else word)

