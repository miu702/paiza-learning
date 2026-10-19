"""
あなたは知り合いの 3 人の中で犬が好きか猫が好きかでアンケートをとりました。

アンケートは "dog" もしくは "cat" のどちらかが書かれています。
改行区切りで各人の回答が 3 行の入力されるので 2 人以上が回答した方を出力してください。

"""

import sys
answers = sys.stdin.read().split()


dog_count = 0
cat_count = 0

for animal in answers:
    if animal == "dog":
        dog_count += 1
    elif animal == "cat":
        cat_count += 1

# 今回はどっちかが多いので、三項演算子で出力
print("dog" if dog_count > cat_count else "cat")

